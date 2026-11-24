window.AnatomiaApp = window.AnatomiaApp || {};

(function (App) {
  const DATA = App.DATA;

  const state = {
    lang: "both", // "both" | "latin" | "hu"
    theme: "light", // "light" | "dark"
    activeGroups: DATA.groups.map((g) => g.id),
    activeCategories: DATA.categories.map((c) => c.id),
    orderMode: "random", // "random" | "sequential"
    showCountHint: false,
    weakOnly: false,

    deck: [],
    deckIndex: 0,
    currentMuscleId: null,
    rowsByCategory: {}, // { [catId]: [{ id: number, value: string }] }
    submitted: false,
    evaluation: null,
    nextRowId: 1
  };

  let poolsByCategory = null;
  let activeDropdown = null; // { close: Function }

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normalizeText(str) {
    return String(str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function buildPools() {
    if (poolsByCategory) return poolsByCategory;
    const pools = {};
    DATA.categories.forEach((cat) => {
      const set = new Set();
      DATA.muscles.forEach((m) => {
        (m[cat.id] || []).forEach((item) => {
          const clean = String(item || "").trim();
          if (clean) set.add(clean);
        });
      });
      pools[cat.id] = Array.from(set).sort((a, b) =>
        a.localeCompare(b, "hu", { sensitivity: "base" })
      );
    });
    poolsByCategory = pools;
    return poolsByCategory;
  }

  function getFilteredMuscles() {
    const groupSet = new Set(state.activeGroups);
    const stats = App.Scoring.loadStats();
    const missedSet = new Set(Object.keys(stats.missedMuscles || {}));

    let list = DATA.muscles.filter((m) =>
      m.groups.some((gid) => groupSet.has(gid))
    );

    if (state.weakOnly && missedSet.size > 0) {
      const weakFiltered = list.filter((m) => missedSet.has(m.id));
      if (weakFiltered.length > 0) {
        list = weakFiltered;
      }
    }
    return list;
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function rebuildDeck(preserveCurrentId) {
    const filtered = getFilteredMuscles();
    const ids = filtered.map((m) => m.id);
    state.deck = state.orderMode === "random" ? shuffleArray(ids) : ids;

    if (preserveCurrentId && state.deck.includes(preserveCurrentId)) {
      state.deckIndex = state.deck.indexOf(preserveCurrentId);
      state.currentMuscleId = preserveCurrentId;
    } else {
      state.deckIndex = 0;
      state.currentMuscleId = state.deck[0] || null;
      resetInputsForCurrentMuscle();
    }
  }

  function getCurrentMuscle() {
    return DATA.muscles.find((m) => m.id === state.currentMuscleId) || null;
  }

  function resetInputsForCurrentMuscle() {
    state.rowsByCategory = {};
    DATA.categories.forEach((cat) => {
      state.rowsByCategory[cat.id] = [{ id: state.nextRowId++, value: "" }];
    });
    state.submitted = false;
    state.evaluation = null;
  }

  function formatMuscleHeader(muscle) {
    if (!muscle) return { title: "", subtitle: "" };
    if (state.lang === "latin") {
      return { title: muscle.latin, subtitle: "" };
    }
    if (state.lang === "hu") {
      return { title: muscle.hungarian, subtitle: "" };
    }
    return { title: muscle.latin, subtitle: muscle.hungarian };
  }

  function formatMuscleOption(muscle) {
    if (state.lang === "latin") return muscle.latin;
    if (state.lang === "hu") return muscle.hungarian;
    return `${muscle.latin} (${muscle.hungarian})`;
  }

  /* ==================== HEADER & TOOLBAR ==================== */

  function renderStats() {
    const stats = App.Scoring.loadStats();
    const avg =
      stats.totalAnswered > 0
        ? Math.round(stats.scoreSum / stats.totalAnswered)
        : 0;
    document.getElementById("statsSummary").textContent =
      `Megoldva: ${stats.totalAnswered} · Átlag: ${avg}% · Hibátlan: ${stats.perfectCount}`;

    const hasWeak = Object.keys(stats.missedMuscles || {}).length > 0;
    const weakLabel = document.getElementById("weakOnlyLabel");
    if (!hasWeak && state.weakOnly) {
      state.weakOnly = false;
      document.getElementById("chkWeakOnly").checked = false;
    }
    weakLabel.style.display = hasWeak ? "inline-flex" : "none";
  }

  function renderToolbarFilters() {
    const groupContainer = document.getElementById("groupFilters");
    groupContainer.innerHTML = DATA.groups
      .map((g) => {
        const active = state.activeGroups.includes(g.id) ? "active" : "";
        return `<button type="button" class="toggle-btn ${active}" data-group="${g.id}">${escapeHtml(g.name)}</button>`;
      })
      .join("");

    groupContainer.querySelectorAll(".toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const gid = btn.dataset.group;
        if (state.activeGroups.includes(gid)) {
          if (state.activeGroups.length === 1) return;
          state.activeGroups = state.activeGroups.filter((id) => id !== gid);
        } else {
          state.activeGroups.push(gid);
        }
        renderToolbarFilters();
        rebuildDeck(true);
        renderJumpSelect();
        renderExercise();
      });
    });

    const catContainer = document.getElementById("categoryFilters");
    catContainer.innerHTML = DATA.categories
      .map((c) => {
        const active = state.activeCategories.includes(c.id) ? "active" : "";
        return `<button type="button" class="toggle-btn ${active}" data-cat="${c.id}">${escapeHtml(c.label)}</button>`;
      })
      .join("");

    catContainer.querySelectorAll(".toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cid = btn.dataset.cat;
        if (state.activeCategories.includes(cid)) {
          if (state.activeCategories.length === 1) return;
          state.activeCategories = state.activeCategories.filter((id) => id !== cid);
        } else {
          state.activeCategories.push(cid);
        }
        if (state.submitted) {
          state.submitted = false;
          state.evaluation = null;
        }
        renderToolbarFilters();
        renderExercise();
      });
    });
  }

  function renderJumpSelect() {
    const select = document.getElementById("muscleJumpSelect");
    const muscles = getFilteredMuscles();
    select.innerHTML = muscles
      .map((m) => `<option value="${m.id}">${escapeHtml(formatMuscleOption(m))}</option>`)
      .join("");
    if (state.currentMuscleId) {
      select.value = state.currentMuscleId;
    }
  }

  /* ==================== EXERCISE & COMBOBOX ==================== */

  function closeActiveDropdown() {
    if (activeDropdown) {
      activeDropdown.close();
      activeDropdown = null;
    }
  }

  function renderExercise() {
    closeActiveDropdown();
    const muscle = getCurrentMuscle();

    if (!muscle) {
      document.getElementById("progressBadge").textContent = "0 / 0";
      document.getElementById("muscleSubgroup").textContent = "";
      document.getElementById("muscleTitle").textContent = "Nincs megjeleníthető izom";
      document.getElementById("muscleSubtitle").textContent = "Válassz ki legalább egy csoportot.";
      document.getElementById("categoriesContainer").innerHTML = "";
      document.getElementById("exerciseFooter").innerHTML = "";
      return;
    }

    const total = state.deck.length;
    document.getElementById("progressBadge").textContent = `${state.deckIndex + 1} / ${total}`;
    document.getElementById("muscleSubgroup").textContent = muscle.subgroup;

    const head = formatMuscleHeader(muscle);
    document.getElementById("muscleTitle").textContent = head.title;
    const subEl = document.getElementById("muscleSubtitle");
    subEl.textContent = head.subtitle;
    subEl.style.display = head.subtitle ? "block" : "none";

    const jumpSelect = document.getElementById("muscleJumpSelect");
    if (jumpSelect.value !== muscle.id) {
      jumpSelect.value = muscle.id;
    }

    document.getElementById("btnPrevMuscle").disabled = total <= 1;
    document.getElementById("btnNextTop").disabled = total <= 1;

    renderCategories(muscle);
    renderFooter(muscle);
  }

  function renderCategories(muscle) {
    const container = document.getElementById("categoriesContainer");
    container.innerHTML = "";

    const activeCats = DATA.categories.filter((c) =>
      state.activeCategories.includes(c.id)
    );

    activeCats.forEach((cat) => {
      const panel = document.createElement("div");
      panel.className = "category-panel";
      panel.dataset.categoryId = cat.id;
      renderCategoryPanel(panel, cat, muscle);
      container.appendChild(panel);
    });
  }

  function renderCategoryPanel(panel, cat, muscle, focusRowId) {
    panel.innerHTML = "";
    const pools = buildPools();
    const pool = pools[cat.id] || [];
    const rows = state.rowsByCategory[cat.id] || [];
    const catEval =
      state.submitted && state.evaluation ? state.evaluation.byCategory[cat.id] : null;

    // Header
    const head = document.createElement("div");
    head.className = "category-head";

    const titleWrap = document.createElement("div");
    titleWrap.className = "category-title-wrap";

    const title = document.createElement("h3");
    title.className = "category-title";
    title.textContent = cat.label;
    titleWrap.appendChild(title);

    if (state.showCountHint) {
      const hint = document.createElement("span");
      hint.className = "category-hint";
      hint.textContent = `(${(muscle[cat.id] || []).length} elem)`;
      titleWrap.appendChild(hint);
    }

    head.appendChild(titleWrap);

    if (catEval) {
      const badge = document.createElement("span");
      const cls = catEval.isPerfect
        ? "is-perfect"
        : catEval.percent > 0
          ? "is-partial"
          : "is-zero";
      badge.className = `category-score ${cls}`;
      badge.textContent = `${catEval.correct.length} / ${catEval.expectedCount} (${catEval.percent}%)`;
      head.appendChild(badge);
    }

    panel.appendChild(head);

    // Rows
    const rowsList = document.createElement("div");
    rowsList.className = "rows-list";

    const expectedSet = new Set(muscle[cat.id] || []);

    rows.forEach((row) => {
      const rowEl = document.createElement("div");
      rowEl.className = "combo-row";

      let statusTag = null;
      if (catEval && row.value) {
        const isOk = expectedSet.has(row.value);
        rowEl.classList.add(isOk ? "is-correct" : "is-wrong");
        statusTag = document.createElement("span");
        statusTag.className = `row-status-tag ${isOk ? "is-correct" : "is-wrong"}`;
        statusTag.textContent = isOk ? "Helyes" : "Hibás";
      }

      const combo = createCombobox({
        pool,
        rows,
        row,
        disabled: state.submitted,
        placeholder: `${cat.label} keresése...`,
        onChange: (newVal) => {
          row.value = newVal;
          renderCategoryPanel(panel, cat, muscle);
        }
      });

      rowEl.appendChild(combo.el);
      if (statusTag) {
        rowEl.appendChild(statusTag);
      }

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "btn-row-remove";
      removeBtn.title = rows.length === 1 ? "Mező törlése" : "Sor eltávolítása";
      removeBtn.textContent = "×";
      removeBtn.disabled = state.submitted;
      removeBtn.addEventListener("click", () => {
        if (state.submitted) return;
        if (rows.length === 1) {
          rows[0].value = "";
        } else {
          state.rowsByCategory[cat.id] = rows.filter((r) => r.id !== row.id);
        }
        renderCategoryPanel(panel, cat, muscle);
      });
      rowEl.appendChild(removeBtn);

      rowsList.appendChild(rowEl);

      if (focusRowId && row.id === focusRowId) {
        setTimeout(() => {
          combo.focusAndOpen();
        }, 0);
      }
    });

    panel.appendChild(rowsList);

    // '+' button to add another row
    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "btn-add-row";
    addBtn.textContent = "+ Hozzáadás";
    addBtn.disabled = state.submitted;
    addBtn.addEventListener("click", () => {
      if (state.submitted) return;
      const newId = state.nextRowId++;
      rows.push({ id: newId, value: "" });
      renderCategoryPanel(panel, cat, muscle, newId);
    });
    panel.appendChild(addBtn);

    // Missing items box after submit
    if (catEval && catEval.missing.length > 0) {
      const missingBox = document.createElement("div");
      missingBox.className = "missing-box";

      const mTitle = document.createElement("div");
      mTitle.className = "missing-title";
      mTitle.textContent = "Hiányzott:";
      missingBox.appendChild(mTitle);

      const mList = document.createElement("ul");
      mList.className = "missing-list";
      catEval.missing.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        mList.appendChild(li);
      });
      missingBox.appendChild(mList);
      panel.appendChild(missingBox);
    }
  }

  function createCombobox(opts) {
    const { pool, rows, row, disabled, placeholder, onChange } = opts;

    const wrap = document.createElement("div");
    wrap.className = "combo";

    const control = document.createElement("div");
    control.className = "combo-control";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "combo-input";
    input.value = row.value || "";
    input.placeholder = placeholder;
    input.disabled = Boolean(disabled);
    input.setAttribute("role", "combobox");
    input.setAttribute("aria-autocomplete", "list");
    input.setAttribute("aria-expanded", "false");

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "combo-toggle";
    toggleBtn.tabIndex = -1;
    toggleBtn.textContent = "▾";
    toggleBtn.title = "Lista megnyitása";
    toggleBtn.disabled = Boolean(disabled);

    control.appendChild(input);
    control.appendChild(toggleBtn);
    wrap.appendChild(control);

    const list = document.createElement("ul");
    list.className = "combo-list";
    list.setAttribute("role", "listbox");
    wrap.appendChild(list);

    let isOpen = false;
    let isFiltering = false;
    let activeIdx = -1;
    let visibleItems = [];

    const takenByOthers = new Set(
      rows
        .filter((r) => r.id !== row.id && r.value)
        .map((r) => r.value)
    );

    function renderList() {
      const q = isFiltering ? normalizeText(input.value.trim()) : "";
      const filtered = q
        ? pool.filter((item) => normalizeText(item).includes(q))
        : pool;

      visibleItems = filtered;
      list.innerHTML = "";

      if (filtered.length === 0) {
        activeIdx = -1;
        const empty = document.createElement("li");
        empty.className = "combo-empty";
        empty.textContent = "Nincs találat";
        list.appendChild(empty);
        return;
      }

      if (activeIdx >= filtered.length) {
        activeIdx = 0;
      }

      filtered.forEach((item, idx) => {
        const li = document.createElement("li");
        li.className = "combo-option";
        li.setAttribute("role", "option");

        const isTaken = takenByOthers.has(item);
        const isSelected = row.value === item;
        if (isTaken) li.classList.add("is-disabled");
        if (isSelected) li.classList.add("is-selected");
        if (idx === activeIdx && !isTaken) li.classList.add("is-active");

        const labelSpan = document.createElement("span");
        labelSpan.textContent = item;
        li.appendChild(labelSpan);

        if (isTaken) {
          const tag = document.createElement("span");
          tag.className = "combo-option-tag";
          tag.textContent = "kiválasztva";
          li.appendChild(tag);
        }

        li.addEventListener("mousedown", (e) => {
          e.preventDefault();
          if (isTaken) return;
          selectItem(item);
        });

        list.appendChild(li);
      });
    }

    function openList(filterMode) {
      if (disabled) return;
      if (activeDropdown && activeDropdown.wrap !== wrap) {
        closeActiveDropdown();
      }
      isOpen = true;
      isFiltering = Boolean(filterMode);
      activeIdx = -1;
      wrap.classList.add("is-open");
      input.setAttribute("aria-expanded", "true");
      renderList();
      activeDropdown = { wrap, close: closeList };
    }

    function closeList() {
      if (!isOpen) return;
      isOpen = false;
      isFiltering = false;
      activeIdx = -1;
      wrap.classList.remove("is-open");
      input.setAttribute("aria-expanded", "false");
      if (input.value !== (row.value || "")) {
        input.value = row.value || "";
      }
      if (activeDropdown && activeDropdown.wrap === wrap) {
        activeDropdown = null;
      }
    }

    function selectItem(item) {
      input.value = item;
      isOpen = false;
      isFiltering = false;
      wrap.classList.remove("is-open");
      input.setAttribute("aria-expanded", "false");
      if (activeDropdown && activeDropdown.wrap === wrap) {
        activeDropdown = null;
      }
      onChange(item);
    }

    function moveActive(delta) {
      if (!isOpen) {
        openList(false);
      }
      if (visibleItems.length === 0) return;

      let steps = 0;
      let next = activeIdx;
      do {
        next =
          next === -1
            ? delta > 0
              ? 0
              : visibleItems.length - 1
            : (next + delta + visibleItems.length) % visibleItems.length;
        steps += 1;
      } while (takenByOthers.has(visibleItems[next]) && steps < visibleItems.length);

      if (!takenByOthers.has(visibleItems[next])) {
        activeIdx = next;
        renderList();
        const activeEl = list.children[activeIdx];
        if (activeEl && activeEl.scrollIntoView) {
          activeEl.scrollIntoView({ block: "nearest" });
        }
      }
    }

    input.addEventListener("focus", () => {
      if (!isOpen) {
        openList(false);
      }
    });

    input.addEventListener("click", () => {
      if (!isOpen) {
        openList(false);
      }
    });

    input.addEventListener("input", () => {
      isFiltering = true;
      if (!isOpen) {
        openList(true);
      } else {
        activeIdx = -1;
        renderList();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        moveActive(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        moveActive(-1);
      } else if (e.key === "Enter") {
        if (!isOpen) return;
        e.preventDefault();
        if (activeIdx >= 0 && visibleItems[activeIdx] && !takenByOthers.has(visibleItems[activeIdx])) {
          selectItem(visibleItems[activeIdx]);
        } else {
          const available = visibleItems.filter((item) => !takenByOthers.has(item));
          if (available.length === 1) {
            selectItem(available[0]);
          }
        }
      } else if (e.key === "Escape") {
        if (isOpen) {
          e.preventDefault();
          closeList();
        }
      }
    });

    input.addEventListener("blur", () => {
      closeList();
    });

    toggleBtn.addEventListener("mousedown", (e) => {
      e.preventDefault();
      if (disabled) return;
      if (isOpen) {
        closeList();
      } else {
        input.focus();
        openList(false);
      }
    });

    return {
      el: wrap,
      focusAndOpen: () => {
        input.focus();
        openList(false);
      }
    };
  }

  function renderFooter(muscle) {
    const footer = document.getElementById("exerciseFooter");
    footer.innerHTML = "";

    if (!state.submitted) {
      const summary = document.createElement("div");
      summary.className = "result-summary";
      const hintLine = document.createElement("div");
      hintLine.className = "result-note";
      hintLine.textContent =
        "Válaszd ki a megfelelő elemeket minden kategóriából; a + Hozzáadás gombbal több sort is felvehetsz.";
      summary.appendChild(hintLine);
      footer.appendChild(summary);

      const actions = document.createElement("div");
      actions.className = "footer-actions";

      const skipBtn = document.createElement("button");
      skipBtn.type = "button";
      skipBtn.className = "btn btn-secondary";
      skipBtn.textContent = "Kihagyás";
      skipBtn.addEventListener("click", () => goStep(1));

      const checkBtn = document.createElement("button");
      checkBtn.type = "button";
      checkBtn.className = "btn btn-primary";
      checkBtn.textContent = "Ellenőrzés";
      checkBtn.addEventListener("click", submitCurrent);

      actions.appendChild(skipBtn);
      actions.appendChild(checkBtn);
      footer.appendChild(actions);
      return;
    }

    const ev = state.evaluation;
    const summary = document.createElement("div");
    summary.className = "result-summary";

    const scoreLine = document.createElement("div");
    const cls = ev.isPerfect
      ? "is-perfect"
      : ev.percent > 0
        ? "is-partial"
        : "is-zero";
    scoreLine.className = `result-score-line ${cls}`;
    scoreLine.textContent = ev.isPerfect
      ? "Hibátlan (100%)"
      : `Eredmény: ${ev.percent}%`;
    summary.appendChild(scoreLine);

    if (muscle.note) {
      const noteLine = document.createElement("div");
      noteLine.className = "result-note";
      noteLine.textContent = `Megjegyzés: ${muscle.note}`;
      summary.appendChild(noteLine);
    }

    footer.appendChild(summary);

    const actions = document.createElement("div");
    actions.className = "footer-actions";

    const retryBtn = document.createElement("button");
    retryBtn.type = "button";
    retryBtn.className = "btn btn-secondary";
    retryBtn.textContent = "Újrapróbálás";
    retryBtn.addEventListener("click", () => {
      resetInputsForCurrentMuscle();
      renderExercise();
    });

    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "btn btn-primary";
    nextBtn.textContent = "Következő izom";
    nextBtn.addEventListener("click", () => goStep(1));

    actions.appendChild(retryBtn);
    actions.appendChild(nextBtn);
    footer.appendChild(actions);
  }

  function submitCurrent() {
    const muscle = getCurrentMuscle();
    if (!muscle || state.submitted) return;

    closeActiveDropdown();

    const selections = {};
    state.activeCategories.forEach((catId) => {
      selections[catId] = (state.rowsByCategory[catId] || [])
        .map((r) => r.value)
        .filter(Boolean);
    });

    const ev = App.Scoring.evaluateMuscle(selections, muscle, state.activeCategories);
    state.submitted = true;
    state.evaluation = ev;

    App.Scoring.recordResult(muscle.id, ev.percent, ev.isPerfect);
    renderStats();
    renderExercise();
  }

  function goStep(delta) {
    if (state.deck.length === 0) return;
    if (state.deckIndex + delta >= state.deck.length && state.orderMode === "random") {
      rebuildDeck(false);
    } else {
      state.deckIndex = (state.deckIndex + delta + state.deck.length) % state.deck.length;
      state.currentMuscleId = state.deck[state.deckIndex];
      resetInputsForCurrentMuscle();
    }
    renderExercise();
  }

  /* ==================== LEXICON DRAWER ==================== */

  function openDrawer() {
    document.getElementById("drawerBackdrop").classList.add("open");
    const drawer = document.getElementById("lexiconDrawer");
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    renderLexicon();
  }

  function closeDrawer() {
    document.getElementById("drawerBackdrop").classList.remove("open");
    const drawer = document.getElementById("lexiconDrawer");
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  }

  function renderLexicon() {
    const query = normalizeText(document.getElementById("lexiconSearch").value.trim());
    const groupFilter = document.getElementById("lexiconGroupFilter").value;
    const body = document.getElementById("lexiconBody");

    const items = DATA.muscles.filter((m) => {
      if (groupFilter !== "all" && !m.groups.includes(groupFilter)) return false;
      if (!query) return true;
      const hay = normalizeText(
        [
          m.latin,
          m.hungarian,
          m.subgroup,
          m.note || "",
          ...m.origin,
          ...m.insertion,
          ...m.innervation,
          ...m.function
        ].join(" ")
      );
      return hay.includes(query);
    });

    if (items.length === 0) {
      body.innerHTML = '<div class="empty-state">Nincs a keresésnek megfelelő izom.</div>';
      return;
    }

    body.innerHTML = items
      .map((m) => {
        const head = formatMuscleHeader(m);
        const titleText = head.subtitle ? `${head.title} – ${head.subtitle}` : head.title;
        return `<div class="lex-item">
          <div class="lex-item-head">
            <span class="lex-item-title">${escapeHtml(titleText)}</span>
            <span class="lex-item-sub">${escapeHtml(m.subgroup)}</span>
          </div>
          <div class="lex-grid">
            <span class="lex-key">Eredés</span><span>${escapeHtml(m.origin.join("; "))}</span>
            <span class="lex-key">Tapadás</span><span>${escapeHtml(m.insertion.join("; "))}</span>
            <span class="lex-key">Beidegzés</span><span>${escapeHtml(m.innervation.join("; "))}</span>
            <span class="lex-key">Funkció</span><span>${escapeHtml(m.function.join("; "))}</span>
            ${m.note ? `<span class="lex-key">Megjegyzés</span><span>${escapeHtml(m.note)}</span>` : ""}
          </div>
        </div>`;
      })
      .join("");
  }

  /* ==================== INIT ==================== */

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    document.getElementById("btnThemeToggle").textContent =
      theme === "dark" ? "Világos mód" : "Sötét mód";
    try {
      localStorage.setItem("anatomia_lower_limb_theme", theme);
    } catch (e) {
      // Ignore storage errors
    }
  }

  function init() {
    try {
      const savedTheme = localStorage.getItem("anatomia_lower_limb_theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        state.theme = savedTheme;
      }
    } catch (e) {
      // Ignore storage errors
    }
    applyTheme(state.theme);

    const lexGroupSelect = document.getElementById("lexiconGroupFilter");
    DATA.groups.forEach((g) => {
      const opt = document.createElement("option");
      opt.value = g.id;
      opt.textContent = g.name;
      lexGroupSelect.appendChild(opt);
    });

    document.getElementById("btnThemeToggle").addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });

    document.querySelectorAll("#langSwitch button").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#langSwitch button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.lang = btn.dataset.val;
        renderJumpSelect();
        renderExercise();
        if (document.getElementById("lexiconDrawer").classList.contains("open")) {
          renderLexicon();
        }
      });
    });

    document.querySelectorAll("#orderSwitch button").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#orderSwitch button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.orderMode = btn.dataset.val;
        rebuildDeck(false);
        renderJumpSelect();
        renderExercise();
      });
    });

    document.getElementById("muscleJumpSelect").addEventListener("change", (e) => {
      const targetId = e.target.value;
      const idx = state.deck.indexOf(targetId);
      if (idx !== -1) {
        state.deckIndex = idx;
        state.currentMuscleId = targetId;
        resetInputsForCurrentMuscle();
        renderExercise();
      }
    });

    document.getElementById("chkCountHint").addEventListener("change", (e) => {
      state.showCountHint = e.target.checked;
      renderExercise();
    });

    document.getElementById("chkWeakOnly").addEventListener("change", (e) => {
      state.weakOnly = e.target.checked;
      rebuildDeck(false);
      renderJumpSelect();
      renderExercise();
    });

    document.getElementById("btnPrevMuscle").addEventListener("click", () => goStep(-1));
    document.getElementById("btnNextTop").addEventListener("click", () => goStep(1));

    document.getElementById("btnResetStats").addEventListener("click", () => {
      App.Scoring.resetStats();
      renderStats();
      rebuildDeck(true);
      renderJumpSelect();
      renderExercise();
    });

    document.getElementById("btnOpenLexicon").addEventListener("click", openDrawer);
    document.getElementById("btnCloseLexicon").addEventListener("click", closeDrawer);
    document.getElementById("drawerBackdrop").addEventListener("click", closeDrawer);
    document.getElementById("lexiconSearch").addEventListener("input", renderLexicon);
    lexGroupSelect.addEventListener("change", renderLexicon);

    document.addEventListener("mousedown", (e) => {
      if (activeDropdown && !activeDropdown.wrap.contains(e.target)) {
        closeActiveDropdown();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.getElementById("lexiconDrawer").classList.contains("open")) {
        closeDrawer();
      }
    });

    renderStats();
    renderToolbarFilters();
    rebuildDeck(false);
    renderJumpSelect();
    renderExercise();
  }

  document.addEventListener("DOMContentLoaded", init);
})(window.AnatomiaApp);
