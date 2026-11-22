window.AnatomiaApp = window.AnatomiaApp || {};

(function (App) {
  const state = {
    view: "lobby", // "lobby" | "quiz"
    lang: "both", // "both" | "latin" | "hu"
    inputMode: "chips", // "chips" | "search"
    tier: "core", // "core" | "full"
    mode: "combo_mixed",
    regions: ["felso_vegtag", "also_vegtag", "torzs", "nyak", "fej"],
    complexity: "mix",
    showCountHint: true,
    strictSynergists: false,
    weakOnly: false,
    theme: "dark",
    lexiconTab: "movements",

    session: {
      questionIndex: 0,
      scoreSum: 0,
      answered: 0,
      recentKeys: new Set(),
      recentScenarioIds: new Set()
    },

    currentQuestion: null,
    submitted: false,
    selectedMovements: [],
    selectedMuscles: [],
    selectedSingle: null,
    lastEvaluation: null
  };

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

  function formatMovement(mv) {
    if (!mv) return { main: "", sub: "" };
    const { jointMap } = App.Generator.getIndexes();
    const jointName = jointMap[mv.jointId] ? jointMap[mv.jointId].hungarian : "";
    if (state.lang === "latin") {
      return { main: mv.labelLatin, sub: jointName };
    }
    if (state.lang === "hu") {
      return { main: mv.labelHu, sub: jointName };
    }
    return { main: mv.labelLatin, sub: mv.labelHu };
  }

  function formatMovementTerm(mv) {
    if (!mv) return { main: "", sub: "" };
    if (state.lang === "latin") {
      return { main: mv.termLatin, sub: "" };
    }
    if (state.lang === "hu") {
      return { main: mv.termHu, sub: "" };
    }
    return { main: mv.termLatin, sub: mv.termHu };
  }

  function formatMuscle(ms) {
    if (!ms) return { main: "", sub: "" };
    if (state.lang === "latin") {
      return { main: ms.latin, sub: ms.group };
    }
    if (state.lang === "hu") {
      return { main: ms.hungarian, sub: ms.group };
    }
    return { main: ms.latin, sub: ms.hungarian };
  }

  function formatMuscleInline(ms) {
    if (!ms) return "";
    if (state.lang === "latin") return ms.latin;
    if (state.lang === "hu") return ms.hungarian;
    return `${ms.latin} (${ms.hungarian})`;
  }

  function formatMovementInline(mv) {
    if (!mv) return "";
    if (state.lang === "latin") return mv.labelLatin;
    if (state.lang === "hu") return mv.labelHu;
    return `${mv.labelLatin} — ${mv.labelHu}`;
  }

  function getConfig() {
    const stats = App.Scoring.loadStats();
    const weakMovementIds = Object.entries(stats.missedMovements)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map((e) => e[0]);
    return {
      mode: state.mode,
      regions: state.regions.slice(),
      complexity: state.complexity,
      tier: state.tier,
      strictSynergists: state.strictSynergists,
      weakOnly: state.weakOnly,
      weakMovementIds
    };
  }

  /* ==================== LOBBY & CONTROLS ==================== */

  function renderStats() {
    const stats = App.Scoring.loadStats();
    document.getElementById("statTotal").textContent = stats.totalAnswered;
    const avg = stats.totalAnswered > 0 ? Math.round(stats.scoreSum / stats.totalAnswered) : 0;
    document.getElementById("statAvg").textContent = `${avg}%`;
    document.getElementById("statPerfect").textContent = stats.perfectCount;
    document.getElementById("statStreak").textContent = `${stats.streak} 🔥`;
    document.getElementById("statBest").textContent = stats.bestStreak;

    const liveStreak = document.getElementById("quizLiveStreak");
    if (liveStreak) liveStreak.textContent = `${stats.streak} 🔥`;

    const hasWeak =
      Object.keys(stats.missedMovements).length > 0 ||
      Object.keys(stats.missedMuscles).length > 0;
    const weakRow = document.getElementById("weakOnlyRow");
    if (weakRow) weakRow.style.display = hasWeak ? "flex" : "none";
  }

  function renderRegionPills() {
    const { regions } = App.Generator.getIndexes();
    const container = document.getElementById("regionPills");
    container.innerHTML = regions
      .map((r) => {
        const active = state.regions.includes(r.id) ? "active" : "";
        return `<button type="button" class="region-btn ${active}" data-region="${r.id}">
          <span>${r.icon}</span><span>${escapeHtml(r.short)}</span>
        </button>`;
      })
      .join("");

    container.querySelectorAll(".region-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const rid = btn.dataset.region;
        if (state.regions.includes(rid)) {
          if (state.regions.length === 1) return; // keep at least 1 region
          state.regions = state.regions.filter((id) => id !== rid);
        } else {
          state.regions.push(rid);
        }
        renderRegionPills();
        updateVarietyInfo();
      });
    });
  }

  function updateVarietyInfo() {
    const { scenarios, muscles, movements } = App.Generator.getIndexes();
    const regionSet = new Set(state.regions);
    const combos = App.Generator.countPossibleCombos(state.regions, state.complexity);
    const scCount = scenarios.filter((s) => s.regions.some((r) => regionSet.has(r))).length;
    const mvCount = movements.filter((m) => regionSet.has(m.region)).length;
    const msPool = App.Generator.getMusclesByTier(state.tier).filter((m) => regionSet.has(m.region));

    const badge = document.getElementById("comboCounterBadge");
    const totalAll = App.Generator.countPossibleCombos(
      App.DATA.regions.map((r) => r.id),
      "mix"
    );
    badge.textContent = `${totalAll.toLocaleString("hu-HU")}+ kombináció • ${muscles.length} izom`;

    const complexityBlock = document.getElementById("complexityBlock");
    const showComplexity = state.mode === "combo_mixed" || state.mode === "combo_only";
    document.getElementById("complexitySwitch").style.opacity = showComplexity ? "1" : "0.45";
    document.getElementById("complexitySwitch").style.pointerEvents = showComplexity ? "auto" : "none";

    const info = document.getElementById("varietyInfo");
    if (state.mode === "combo_mixed") {
      info.innerHTML = `Aktív szűrővel: <strong>${combos.toLocaleString("hu-HU")}</strong> generálható kombináció + <strong>${scCount}</strong> életszerű forgatókönyv • <strong>${msPool.length}</strong> izom`;
    } else if (state.mode === "combo_only") {
      info.innerHTML = `Aktív szűrővel: <strong>${combos.toLocaleString("hu-HU")}</strong> egyedi kombináció • <strong>${msPool.length}</strong> izom`;
    } else if (state.mode === "scenarios_only") {
      info.innerHTML = `Aktív szűrővel: <strong>${scCount}</strong> sport- és hétköznapi mozdulat • <strong>${msPool.length}</strong> izom`;
    } else if (state.mode === "reverse") {
      const actionable = msPool.filter((m) => m.actions && m.actions.some((a) => a.role === "prime")).length;
      info.innerHTML = `Aktív szűrővel: <strong>${actionable}</strong> izom feladattá alakítható`;
    } else if (state.mode === "anatomy_facts") {
      info.innerHTML = `Aktív szűrővel: <strong>${msPool.length * 3}</strong> eredés / tapadás / beidegzés kérdés`;
    } else {
      info.innerHTML = `Aktív szűrővel: <strong>${mvCount}</strong> mozgásfajta (${mvCount * 3} hétköznapi leírás)`;
    }

    // Update tier switch labels with counts
    const coreCount = muscles.filter((m) => m.tier === "core").length;
    const tierBtns = document.querySelectorAll("#tierSwitch button");
    tierBtns[0].textContent = `Alap (${coreCount})`;
    tierBtns[1].textContent = `Teljes (${muscles.length})`;
  }

  function switchView(viewName) {
    state.view = viewName;
    document.getElementById("viewLobby").classList.toggle("active", viewName === "lobby");
    document.getElementById("viewQuiz").classList.toggle("active", viewName === "quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ==================== QUIZ FLOW ==================== */

  function startQuiz() {
    state.session = {
      questionIndex: 0,
      scoreSum: 0,
      answered: 0,
      recentKeys: new Set(),
      recentScenarioIds: new Set()
    };
    switchView("quiz");
    nextQuestion();
  }

  function nextQuestion() {
    const q = App.Generator.generateQuestion(getConfig(), state.session);
    if (!q) {
      alert("A jelenlegi szűrővel nem található elég elem. Jelölj ki több tájegységet!");
      switchView("lobby");
      return;
    }
    state.session.questionIndex += 1;
    state.currentQuestion = q;
    state.submitted = false;
    state.selectedMovements = [];
    state.selectedMuscles = [];
    state.selectedSingle = null;
    state.lastEvaluation = null;

    updateQuizHeader();
    renderQuestion();
    document.getElementById("feedbackCard").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateQuizHeader() {
    document.getElementById("quizQuestionCounter").textContent = `${state.session.questionIndex}. kérdés`;
    const avg =
      state.session.answered > 0
        ? `${Math.round(state.session.scoreSum / state.session.answered)}% (${state.session.answered} kész)`
        : "Munkamenet: –";
    document.getElementById("quizSessionScore").textContent = avg;
    renderStats();
  }

  function renderQuestion() {
    const q = state.currentQuestion;
    if (!q) return;
    const card = document.getElementById("questionCard");
    const { regionMap, movementMap, muscleMap } = App.Generator.getIndexes();

    const regionBadges = (q.regions || [])
      .map((rid) => {
        const r = regionMap[rid];
        return r ? `<span class="pill">${r.icon} ${escapeHtml(r.short)}</span>` : "";
      })
      .join("");

    if (q.type === "motion_analysis") {
      const mvHint = state.showCountHint
        ? `<span class="step-hint">Helyes mozgások száma: ${q.correctMovementIds.length} db</span>`
        : "";
      const msExpectedCount = state.strictSynergists
        ? q.primeMuscleIds.length + q.synergistMuscleIds.length
        : q.primeMuscleIds.length;
      const msHint = state.showCountHint
        ? `<span class="step-hint">Fő feszülő izmok száma: ${msExpectedCount} db${
            !state.strictSynergists && q.synergistMuscleIds.length > 0
              ? ` (+${q.synergistMuscleIds.length} segédizom)`
              : ""
          }</span>`
        : "";

      card.innerHTML = `
        <div class="question-badges">
          <span class="pill pill-accent">${escapeHtml(q.sourceBadge)}</span>
          ${regionBadges}
        </div>
        <h2 class="question-title">${escapeHtml(q.title)}</h2>
        <div class="question-desc">${escapeHtml(q.description)}</div>

        <div class="quiz-step">
          <div class="step-head">
            <h3><span class="step-num">1</span> Milyen anatómiai mozgások alkotják?</h3>
            ${mvHint}
          </div>
          <div id="movementInputArea"></div>
        </div>

        <div class="quiz-step">
          <div class="step-head">
            <h3><span class="step-num">2</span> Milyen izmok feszülnek közben?</h3>
            ${msHint}
          </div>
          <div id="muscleInputArea"></div>
        </div>

        <div class="quiz-actions">
          <button type="button" class="btn btn-secondary" id="btnSkipQuestion">↻ Másik kérdés</button>
          <button type="button" class="btn btn-primary btn-lg" id="btnCheckAnswer" ${state.submitted ? "disabled" : ""}>
            Ellenőrzés ✓
          </button>
        </div>
      `;

      renderMultiPicker(
        document.getElementById("movementInputArea"),
        "movements",
        q.movementOptions,
        state.selectedMovements,
        (id) => formatMovement(movementMap[id]),
        "Kezdj el gépelni egy mozgást (pl. flexio, szupinacio, abdukcio, hajlitas)..."
      );

      renderMultiPicker(
        document.getElementById("muscleInputArea"),
        "muscles",
        q.muscleOptions,
        state.selectedMuscles,
        (id) => formatMuscle(muscleMap[id]),
        "Kezdj el gépelni egy izmot (pl. biceps, deltoideus, farizom, vaskos)..."
      );
    } else if (q.type === "reverse") {
      const ms = muscleMap[q.muscleId];
      const fmt = formatMuscle(ms);
      const expectedCount = state.strictSynergists
        ? q.primeMovementIds.length + q.synergistMovementIds.length
        : q.primeMovementIds.length;
      const hint = state.showCountHint
        ? `<span class="step-hint">Fő mozgások száma: ${expectedCount} db</span>`
        : "";

      card.innerHTML = `
        <div class="question-badges">
          <span class="pill pill-accent">${escapeHtml(q.sourceBadge)}</span>
          ${regionBadges}
          <span class="pill">${escapeHtml(ms.group)}</span>
        </div>
        <h2 class="question-title">${escapeHtml(fmt.main)}</h2>
        ${fmt.sub && state.lang === "both" ? `<p class="muted" style="margin-bottom:14px;font-size:1rem;">${escapeHtml(fmt.sub)}</p>` : ""}
        <div class="question-desc">Ha ez az izom összehúzódik, milyen anatómiai mozgás(ok) jönnek létre?</div>

        <div class="quiz-step">
          <div class="step-head">
            <h3><span class="step-num">1</span> Válaszd ki az izom által végzett mozgásokat!</h3>
            ${hint}
          </div>
          <div id="movementInputArea"></div>
        </div>

        <div class="quiz-actions">
          <button type="button" class="btn btn-secondary" id="btnSkipQuestion">↻ Másik kérdés</button>
          <button type="button" class="btn btn-primary btn-lg" id="btnCheckAnswer" ${state.submitted ? "disabled" : ""}>
            Ellenőrzés ✓
          </button>
        </div>
      `;

      renderMultiPicker(
        document.getElementById("movementInputArea"),
        "movements",
        q.movementOptions,
        state.selectedMovements,
        (id) => formatMovement(movementMap[id]),
        "Kezdj el gépelni egy mozgást (pl. flexio, kirotacio, abdukcio)..."
      );
    } else if (q.type === "anatomy_fact") {
      const ms = muscleMap[q.muscleId];
      const fmt = formatMuscle(ms);

      card.innerHTML = `
        <div class="question-badges">
          <span class="pill pill-accent">${escapeHtml(q.sourceBadge)}</span>
          ${regionBadges}
        </div>
        <h2 class="question-title">${escapeHtml(fmt.main)}</h2>
        ${fmt.sub && state.lang === "both" ? `<p class="muted" style="margin-bottom:14px;font-size:1rem;">${escapeHtml(fmt.sub)}</p>` : ""}
        <div class="question-desc">Mi a fenti izom helyes <strong>${escapeHtml(q.fieldLabel.toLowerCase())}e</strong>?</div>

        <div class="fact-options" id="singleOptions">
          ${q.options
            .map((opt) => {
              let cls = "fact-btn";
              if (state.selectedSingle === opt.id) cls += " selected";
              if (state.submitted) {
                if (opt.id === q.correctOptionId) cls += " state-correct";
                else if (state.selectedSingle === opt.id) cls += " state-wrong";
              }
              return `<button type="button" class="${cls}" data-opt="${opt.id}" ${state.submitted ? "disabled" : ""}>
                ${escapeHtml(opt.text)}
              </button>`;
            })
            .join("")}
        </div>

        <div class="quiz-actions">
          <button type="button" class="btn btn-secondary" id="btnSkipQuestion">↻ Másik kérdés</button>
          <button type="button" class="btn btn-primary btn-lg" id="btnCheckAnswer" ${state.submitted ? "disabled" : ""}>
            Ellenőrzés ✓
          </button>
        </div>
      `;

      card.querySelectorAll(".fact-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (state.submitted) return;
          state.selectedSingle = btn.dataset.opt;
          renderQuestion();
        });
      });
    } else if (q.type === "movement_term") {
      card.innerHTML = `
        <div class="question-badges">
          <span class="pill pill-accent">${escapeHtml(q.sourceBadge)}</span>
          ${regionBadges}
        </div>
        <h2 class="question-title">Melyik anatómiai mozgásfajtát írja le az alábbi mondat?</h2>
        <div class="question-desc">„${escapeHtml(q.promptPhrase.charAt(0).toUpperCase() + q.promptPhrase.slice(1))}.”</div>

        <div class="chip-grid" id="termOptions">
          ${q.optionIds
            .map((id) => {
              const fmt = formatMovementTerm(movementMap[id]);
              let cls = "choice-chip";
              if (state.selectedSingle === id) cls += " selected";
              if (state.submitted) {
                if (id === q.movementId) cls += " state-correct";
                else if (state.selectedSingle === id) cls += " state-wrong";
              }
              return `<button type="button" class="${cls}" data-opt="${id}" ${state.submitted ? "disabled" : ""}>
                <span class="chip-main">${escapeHtml(fmt.main)}</span>
                ${fmt.sub ? `<span class="chip-sub">${escapeHtml(fmt.sub)}</span>` : ""}
              </button>`;
            })
            .join("")}
        </div>

        <div class="quiz-actions">
          <button type="button" class="btn btn-secondary" id="btnSkipQuestion">↻ Másik kérdés</button>
          <button type="button" class="btn btn-primary btn-lg" id="btnCheckAnswer" ${state.submitted ? "disabled" : ""}>
            Ellenőrzés ✓
          </button>
        </div>
      `;

      card.querySelectorAll(".choice-chip").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (state.submitted) return;
          state.selectedSingle = btn.dataset.opt;
          renderQuestion();
        });
      });
    }

    document.getElementById("btnSkipQuestion").addEventListener("click", nextQuestion);
    document.getElementById("btnCheckAnswer").addEventListener("click", checkAnswer);
  }

  function getChipEvalClass(kind, id) {
    if (!state.submitted || !state.lastEvaluation) return "";
    const ev = kind === "movements" ? state.lastEvaluation.movementEval : state.lastEvaluation.muscleEval;
    if (!ev) return "";
    if (ev.correctPrime.includes(id)) return " state-correct";
    if (ev.bonusSynergist.includes(id)) return " state-synergist";
    if (ev.missedPrime.includes(id)) return " state-missed";
    if (ev.wrong.includes(id)) return " state-wrong";
    return "";
  }

  function renderMultiPicker(container, kind, chipIds, selectedArray, formatter, placeholder) {
    if (state.inputMode === "chips") {
      container.innerHTML = `<div class="chip-grid">
        ${chipIds
          .map((id) => {
            const fmt = formatter(id);
            const isSel = selectedArray.includes(id);
            const evalCls = getChipEvalClass(kind, id);
            return `<button type="button" class="choice-chip ${isSel ? "selected" : ""}${evalCls}" data-id="${id}" ${state.submitted ? "disabled" : ""}>
              <span class="chip-main">${escapeHtml(fmt.main)}</span>
              ${fmt.sub ? `<span class="chip-sub">${escapeHtml(fmt.sub)}</span>` : ""}
            </button>`;
          })
          .join("")}
      </div>`;

      container.querySelectorAll(".choice-chip").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (state.submitted) return;
          const id = btn.dataset.id;
          const idx = selectedArray.indexOf(id);
          if (idx >= 0) selectedArray.splice(idx, 1);
          else selectedArray.push(id);
          renderMultiPicker(container, kind, chipIds, selectedArray, formatter, placeholder);
        });
      });
      return;
    }

    // Advanced Search / Autocomplete Mode
    const { movements } = App.Generator.getIndexes();
    const searchPool =
      kind === "movements"
        ? movements
        : App.Generator.getMusclesByTier(state.tier);

    container.innerHTML = `
      <div class="search-picker">
        <div class="selected-tags">
          ${selectedArray.length === 0 ? `<span class="muted" style="font-size:0.84rem;">Még nincs kiválasztva elem.</span>` : ""}
          ${selectedArray
            .map((id) => {
              const fmt = formatter(id);
              const evalCls = getChipEvalClass(kind, id);
              return `<span class="selected-tag${evalCls}">
                <span>${escapeHtml(fmt.main)}</span>
                ${!state.submitted ? `<button type="button" data-remove="${id}" title="Eltávolítás">✕</button>` : ""}
              </span>`;
            })
            .join("")}
        </div>
        ${
          !state.submitted
            ? `<input type="text" class="search-input" placeholder="${escapeHtml(placeholder)}" autocomplete="off" />
               <div class="autocomplete-list"></div>`
            : ""
        }
      </div>
    `;

    container.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.remove;
        const idx = selectedArray.indexOf(id);
        if (idx >= 0) selectedArray.splice(idx, 1);
        renderMultiPicker(container, kind, chipIds, selectedArray, formatter, placeholder);
      });
    });

    if (state.submitted) return;

    const input = container.querySelector(".search-input");
    const list = container.querySelector(".autocomplete-list");
    let activeIdx = 0;
    let currentMatches = [];

    function updateDropdown() {
      const q = normalizeText(input.value.trim());
      if (!q) {
        list.classList.remove("open");
        list.innerHTML = "";
        currentMatches = [];
        return;
      }

      currentMatches = searchPool
        .filter((item) => !selectedArray.includes(item.id))
        .filter((item) => {
          const hay =
            kind === "movements"
              ? `${item.labelLatin} ${item.labelHu} ${item.termLatin} ${item.termHu}`
              : `${item.latin} ${item.hungarian} ${item.group}`;
          return normalizeText(hay).includes(q);
        })
        .slice(0, 9);

      activeIdx = 0;
      if (currentMatches.length === 0) {
        list.innerHTML = `<div class="ac-item"><span class="ac-sub">Nincs találat erre: „${escapeHtml(input.value)}”</span></div>`;
        list.classList.add("open");
        return;
      }

      list.innerHTML = currentMatches
        .map((item, idx) => {
          const fmt = formatter(item.id);
          return `<div class="ac-item ${idx === activeIdx ? "active" : ""}" data-pick="${item.id}">
            <span class="ac-title">${escapeHtml(fmt.main)}</span>
            <span class="ac-sub">${escapeHtml(fmt.sub)}</span>
          </div>`;
        })
        .join("");
      list.classList.add("open");

      list.querySelectorAll("[data-pick]").forEach((el) => {
        el.addEventListener("mousedown", (e) => {
          e.preventDefault();
          pickItem(el.dataset.pick);
        });
      });
    }

    function pickItem(id) {
      if (!selectedArray.includes(id)) selectedArray.push(id);
      renderMultiPicker(container, kind, chipIds, selectedArray, formatter, placeholder);
      const nextInput = container.querySelector(".search-input");
      if (nextInput) nextInput.focus();
    }

    input.addEventListener("input", updateDropdown);
    input.addEventListener("keydown", (e) => {
      if (!list.classList.contains("open") || currentMatches.length === 0) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeIdx = (activeIdx + 1) % currentMatches.length;
        list.querySelectorAll(".ac-item").forEach((el, i) => el.classList.toggle("active", i === activeIdx));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeIdx = (activeIdx - 1 + currentMatches.length) % currentMatches.length;
        list.querySelectorAll(".ac-item").forEach((el, i) => el.classList.toggle("active", i === activeIdx));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (currentMatches[activeIdx]) pickItem(currentMatches[activeIdx].id);
      } else if (e.key === "Escape") {
        list.classList.remove("open");
      }
    });
    input.addEventListener("blur", () => {
      setTimeout(() => list.classList.remove("open"), 150);
    });
  }

  /* ==================== EVALUATION & FEEDBACK ==================== */

  function checkAnswer() {
    const q = state.currentQuestion;
    if (!q || state.submitted) return;

    let overallPercent = 0;
    let movementEval = null;
    let muscleEval = null;
    let singleEval = null;

    if (q.type === "motion_analysis") {
      movementEval = App.Scoring.evaluateSet(state.selectedMovements, q.correctMovementIds, [], {});
      muscleEval = App.Scoring.evaluateSet(
        state.selectedMuscles,
        q.primeMuscleIds,
        q.synergistMuscleIds,
        { strictSynergists: state.strictSynergists }
      );
      overallPercent = Math.round((movementEval.percent + muscleEval.percent) / 2);
      App.Scoring.recordResult(overallPercent, movementEval.missedPrime, muscleEval.missedPrime);
    } else if (q.type === "reverse") {
      movementEval = App.Scoring.evaluateSet(
        state.selectedMovements,
        q.primeMovementIds,
        q.synergistMovementIds,
        { strictSynergists: state.strictSynergists }
      );
      overallPercent = movementEval.percent;
      App.Scoring.recordResult(overallPercent, movementEval.missedPrime, overallPercent < 80 ? [q.muscleId] : []);
    } else if (q.type === "anatomy_fact") {
      if (!state.selectedSingle) {
        alert("Válassz egy választ az ellenőrzés előtt!");
        return;
      }
      singleEval = App.Scoring.evaluateSingleChoice(state.selectedSingle, q.correctOptionId);
      overallPercent = singleEval.percent;
      App.Scoring.recordResult(overallPercent, [], singleEval.isPerfect ? [] : [q.muscleId]);
    } else if (q.type === "movement_term") {
      if (!state.selectedSingle) {
        alert("Válassz egy mozgásfajtát az ellenőrzés előtt!");
        return;
      }
      singleEval = App.Scoring.evaluateSingleChoice(state.selectedSingle, q.movementId);
      overallPercent = singleEval.percent;
      App.Scoring.recordResult(overallPercent, singleEval.isPerfect ? [] : [q.movementId], []);
    }

    state.submitted = true;
    state.lastEvaluation = { overallPercent, movementEval, muscleEval, singleEval };
    state.session.answered += 1;
    state.session.scoreSum += overallPercent;

    updateQuizHeader();
    renderQuestion();
    renderFeedback();
  }

  function renderFeedback() {
    const q = state.currentQuestion;
    const ev = state.lastEvaluation;
    const card = document.getElementById("feedbackCard");
    const { movementMap, muscleMap } = App.Generator.getIndexes();

    const p = ev.overallPercent;
    const scoreTier = p >= 85 ? "high" : p >= 50 ? "mid" : "low";
    const headline =
      p === 100
        ? "Hibátlan megoldás! 🎉"
        : p >= 80
        ? "Nagyon szép eredmény! 👏"
        : p >= 50
        ? "Jó irány, nézd át a kihagyott elemeket!"
        : "Ne csüggedj — nézd át a magyarázatot alább!";

    let subPills = "";
    if (q.type === "motion_analysis") {
      subPills += `<span class="pill ${ev.movementEval.percent === 100 ? "pill-green" : "pill-amber"}">Mozgások: ${ev.movementEval.percent}%</span>`;
      subPills += `<span class="pill ${ev.muscleEval.percent === 100 ? "pill-green" : "pill-amber"}">Izmok: ${ev.muscleEval.percent}%</span>`;
      if (ev.muscleEval.bonusSynergist.length > 0) {
        subPills += `<span class="pill pill-blue">+${ev.muscleEval.bonusSynergist.length} segédizom bónusz!</span>`;
      }
    } else if (q.type === "reverse" && ev.movementEval.bonusSynergist.length > 0) {
      subPills += `<span class="pill pill-blue">+${ev.movementEval.bonusSynergist.length} másodlagos mozgás bónusz!</span>`;
    }

    let detailsHtml = "";

    // Movement details
    if (q.type === "motion_analysis" || q.type === "reverse") {
      const mEv = ev.movementEval;
      const items = [];
      mEv.correctPrime.forEach((id) => items.push({ id, st: "correct", badge: "✓ Helyes", cls: "pill-green" }));
      mEv.bonusSynergist.forEach((id) => items.push({ id, st: "synergist", badge: "★ Segéd-funkció (bónusz)", cls: "pill-blue" }));
      mEv.missedPrime.forEach((id) => items.push({ id, st: "missed", badge: "! Kihagyott fő mozgás", cls: "pill-amber" }));
      mEv.wrong.forEach((id) => items.push({ id, st: "wrong", badge: "✕ Nem ez történik", cls: "pill-red" }));

      detailsHtml += `
        <div class="breakdown-section">
          <h4>Alkotó mozgások részletezése</h4>
          <div class="detail-list">
            ${items
              .map((it) => {
                const mv = movementMap[it.id];
                return `<div class="detail-item st-${it.st}">
                  <button type="button" class="detail-summary">
                    <div>
                      <div class="detail-title">${escapeHtml(formatMovementInline(mv))}</div>
                      <div class="detail-reason">💡 ${escapeHtml(mv.hint)}</div>
                    </div>
                    <span class="pill ${it.cls}">${it.badge}</span>
                  </button>
                </div>`;
              })
              .join("")}
          </div>
        </div>
      `;
    }

    // Muscle details (expandable with origin/insertion/innervation!)
    if (q.type === "motion_analysis") {
      const msEv = ev.muscleEval;
      const items = [];
      msEv.correctPrime.forEach((id) => items.push({ id, st: "correct", badge: "✓ Helyes fő izom", cls: "pill-green" }));
      msEv.bonusSynergist.forEach((id) => items.push({ id, st: "synergist", badge: "★ Segédizomként helyes!", cls: "pill-blue" }));
      msEv.missedPrime.forEach((id) => items.push({ id, st: "missed", badge: "! Kihagyott fő izom", cls: "pill-amber" }));
      msEv.unselectedSynergists.forEach((id) => items.push({ id, st: "synergist", badge: "ℹ Segédizom (szinergista)", cls: "pill-blue" }));
      msEv.wrong.forEach((id) => items.push({ id, st: "wrong", badge: "✕ Téves jelölés", cls: "pill-red" }));

      detailsHtml += `
        <div class="breakdown-section">
          <h4>Feszülő izmok (kattints bármelyikre az eredés/tapadás/beidegzéshez!)</h4>
          <div class="detail-list">
            ${items
              .map((it) => {
                const ms = muscleMap[it.id];
                const reasons = (q.muscleReasons[it.id] || [])
                  .map((r) => {
                    const mv = movementMap[r.movementId];
                    return `${mv ? mv.labelLatin : r.movementId} (${r.role === "prime" ? "fő" : "segéd"})`;
                  })
                  .join(" • ");
                return renderMuscleAccordion(ms, it.st, it.badge, it.cls, reasons || ms.group);
              })
              .join("")}
          </div>
        </div>
      `;
    }

    if (q.type === "reverse" || q.type === "anatomy_fact") {
      const ms = muscleMap[q.muscleId];
      detailsHtml += `
        <div class="breakdown-section">
          <h4>Izom adatlap</h4>
          <div class="detail-list">
            ${renderMuscleAccordion(ms, ev.overallPercent === 100 ? "correct" : "missed", "Teljes adatlap", "pill-accent", ms.group, true)}
          </div>
        </div>
      `;
    }

    if (q.type === "movement_term") {
      const mv = movementMap[q.movementId];
      detailsHtml += `
        <div class="note-box">
          <strong>Helyes válasz:</strong> ${escapeHtml(mv.termLatin)} — ${escapeHtml(mv.termHu)}<br />
          <strong>Megjegyzési trükk:</strong> ${escapeHtml(mv.hint)}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="score-banner">
        <div class="score-left">
          <div class="score-circle ${scoreTier}">${p}%</div>
          <div class="score-summary">
            <h3>${headline}</h3>
            <div class="score-pills">${subPills}</div>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-lg" id="btnNextQuestion">Következő kérdés →</button>
      </div>
      ${q.note ? `<div class="note-box"><strong>Anatómiai megjegyzés:</strong> ${escapeHtml(q.note)}</div>` : ""}
      ${detailsHtml}
    `;

    card.style.display = "block";
    document.getElementById("btnNextQuestion").addEventListener("click", nextQuestion);

    card.querySelectorAll(".detail-item .detail-summary").forEach((btn) => {
      const parent = btn.closest(".detail-item");
      if (!parent.querySelector(".detail-body")) return;
      btn.addEventListener("click", () => parent.classList.toggle("open"));
    });

    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function renderMuscleAccordion(ms, st, badge, badgeCls, subtitle, defaultOpen) {
    return `<div class="detail-item st-${st} ${defaultOpen ? "open" : ""}">
      <button type="button" class="detail-summary">
        <div>
          <div class="detail-title">${escapeHtml(formatMuscleInline(ms))}</div>
          <div class="detail-reason">${escapeHtml(subtitle)}</div>
        </div>
        <span class="pill ${badgeCls}">${badge} ▾</span>
      </button>
      <div class="detail-body">
        <div class="detail-grid">
          <div class="detail-kv"><strong>Eredés</strong>${escapeHtml(ms.origin)}</div>
          <div class="detail-kv"><strong>Tapadás</strong>${escapeHtml(ms.insertion)}</div>
          <div class="detail-kv"><strong>Beidegzés</strong>${escapeHtml(ms.innervation)}</div>
          <div class="detail-kv"><strong>Funkció</strong>${escapeHtml(ms.functionText)}</div>
        </div>
      </div>
    </div>`;
  }

  /* ==================== LEXICON DRAWER ==================== */

  function openLexicon() {
    document.getElementById("drawerBackdrop").classList.add("open");
    document.getElementById("lexiconDrawer").classList.add("open");
    document.getElementById("lexiconDrawer").setAttribute("aria-hidden", "false");
    renderLexicon();
  }

  function closeLexicon() {
    document.getElementById("drawerBackdrop").classList.remove("open");
    document.getElementById("lexiconDrawer").classList.remove("open");
    document.getElementById("lexiconDrawer").setAttribute("aria-hidden", "true");
  }

  function renderLexicon() {
    const q = normalizeText(document.getElementById("lexiconSearch").value.trim());
    const regionFilter = document.getElementById("lexiconRegionFilter").value;
    const body = document.getElementById("lexiconBody");
    const { movements, muscles, jointMap } = App.Generator.getIndexes();

    if (state.lexiconTab === "movements") {
      const filtered = movements.filter((m) => {
        if (regionFilter !== "all" && m.region !== regionFilter) return false;
        if (!q) return true;
        return normalizeText(`${m.labelLatin} ${m.labelHu} ${m.termLatin} ${m.termHu} ${m.hint}`).includes(q);
      });

      body.innerHTML = filtered
        .map((m) => {
          const j = jointMap[m.jointId];
          return `<div class="lex-card">
            <h4>${escapeHtml(m.labelLatin)} — ${escapeHtml(m.labelHu)}</h4>
            <div class="lex-sub">${escapeHtml(j ? j.hungarian : "")}</div>
            <p class="lex-text"><strong>Példa:</strong> ${escapeHtml(m.everydayPhrases[0])}</p>
            <p class="lex-text"><strong>💡 Trükk:</strong> ${escapeHtml(m.hint)}</p>
          </div>`;
        })
        .join("") || `<p class="muted">Nincs találat.</p>`;
    } else {
      const filtered = muscles.filter((m) => {
        if (regionFilter !== "all" && m.region !== regionFilter) return false;
        if (!q) return true;
        return normalizeText(`${m.latin} ${m.hungarian} ${m.group} ${m.origin} ${m.insertion} ${m.innervation}`).includes(q);
      });

      body.innerHTML = filtered
        .map(
          (m) => `<div class="lex-card">
            <h4>${escapeHtml(m.latin)} (${escapeHtml(m.hungarian)})</h4>
            <div class="lex-sub">${escapeHtml(m.group)} • ${m.tier === "core" ? "Alap" : "Teljes"}</div>
            <p class="lex-text"><strong>Eredés:</strong> ${escapeHtml(m.origin)}</p>
            <p class="lex-text"><strong>Tapadás:</strong> ${escapeHtml(m.insertion)}</p>
            <p class="lex-text"><strong>Beidegzés:</strong> ${escapeHtml(m.innervation)}</p>
            <p class="lex-text"><strong>Funkció:</strong> ${escapeHtml(m.functionText)}</p>
          </div>`
        )
        .join("") || `<p class="muted">Nincs találat.</p>`;
    }
  }

  /* ==================== INIT & EVENTS ==================== */

  function bindSegmented(id, onChange) {
    const el = document.getElementById(id);
    el.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        el.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        onChange(btn.dataset.val);
      });
    });
  }

  function init() {
    const { regions } = App.Generator.getIndexes();

    // Populate lexicon region filter
    const lexSelect = document.getElementById("lexiconRegionFilter");
    regions.forEach((r) => {
      const opt = document.createElement("option");
      opt.value = r.id;
      opt.textContent = `${r.icon} ${r.name}`;
      lexSelect.appendChild(opt);
    });

    renderRegionPills();
    renderStats();
    updateVarietyInfo();

    // Topbar segmented switches
    bindSegmented("langSwitch", (val) => {
      state.lang = val;
      if (state.view === "quiz" && state.currentQuestion) {
        renderQuestion();
        if (state.submitted) renderFeedback();
      }
    });

    bindSegmented("inputModeSwitch", (val) => {
      state.inputMode = val;
      if (state.view === "quiz" && state.currentQuestion) {
        renderQuestion();
      }
    });

    bindSegmented("tierSwitch", (val) => {
      state.tier = val;
      updateVarietyInfo();
      if (state.view === "quiz" && state.currentQuestion && !state.submitted && state.currentQuestion.type === "motion_analysis") {
        // Recompute prime/synergists and chip options cleanly for new tier on active question
        const q = state.currentQuestion;
        const res = App.Generator.getMusclesForMovements(q.correctMovementIds, state.tier);
        q.primeMuscleIds = res.primeIds;
        q.synergistMuscleIds = res.synergistIds;
        q.muscleReasons = res.muscleReasons;
        q.muscleOptions = App.Generator.buildMuscleOptions(
          res.primeIds,
          res.synergistIds,
          state.tier,
          q.correctMovementIds,
          state.regions
        );
        const validIds = new Set(App.Generator.getMusclesByTier(state.tier).map((m) => m.id));
        state.selectedMuscles = state.selectedMuscles.filter((id) => validIds.has(id));
        renderQuestion();
      }
    });

    bindSegmented("complexitySwitch", (val) => {
      state.complexity = val;
      updateVarietyInfo();
    });

    // Mode cards
    document.querySelectorAll("#modeGrid .mode-card").forEach((card) => {
      card.addEventListener("click", () => {
        document.querySelectorAll("#modeGrid .mode-card").forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        state.mode = card.dataset.mode;
        updateVarietyInfo();
      });
    });

    document.getElementById("btnSelectAllRegions").addEventListener("click", () => {
      state.regions = regions.map((r) => r.id);
      renderRegionPills();
      updateVarietyInfo();
    });

    document.getElementById("chkCountHint").addEventListener("change", (e) => {
      state.showCountHint = e.target.checked;
    });
    document.getElementById("chkStrictSynergists").addEventListener("change", (e) => {
      state.strictSynergists = e.target.checked;
    });
    document.getElementById("chkWeakOnly").addEventListener("change", (e) => {
      state.weakOnly = e.target.checked;
    });

    document.getElementById("btnStartQuiz").addEventListener("click", startQuiz);
    document.getElementById("btnBackLobby").addEventListener("click", () => {
      renderStats();
      switchView("lobby");
    });
    document.getElementById("btnHome").addEventListener("click", () => {
      renderStats();
      switchView("lobby");
    });

    document.getElementById("btnResetStats").addEventListener("click", () => {
      if (confirm("Biztosan törlöd az eddigi statisztikáidat?")) {
        App.Scoring.resetStats();
        renderStats();
      }
    });

    // Theme toggle
    document.getElementById("btnThemeToggle").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", state.theme);
      document.getElementById("btnThemeToggle").textContent = state.theme === "dark" ? "☀️" : "🌙";
    });

    // Lexicon drawer
    document.getElementById("btnOpenLexicon").addEventListener("click", openLexicon);
    document.getElementById("btnCloseLexicon").addEventListener("click", closeLexicon);
    document.getElementById("drawerBackdrop").addEventListener("click", closeLexicon);
    document.querySelectorAll(".drawer-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".drawer-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        state.lexiconTab = tab.dataset.tab;
        renderLexicon();
      });
    });
    document.getElementById("lexiconSearch").addEventListener("input", renderLexicon);
    document.getElementById("lexiconRegionFilter").addEventListener("change", renderLexicon);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLexicon();
    });
  }

  // Stress-test helper for automated verification
  App.runSelfTest = function (iterations) {
    const n = iterations || 500;
    const modes = ["combo_mixed", "combo_only", "scenarios_only", "reverse", "anatomy_facts", "movement_terms"];
    const allRegions = App.DATA.regions.map((r) => r.id);
    const { movementMap } = App.Generator.getIndexes();
    let tested = 0;
    const failures = [];

    for (const mode of modes) {
      for (const tier of ["core", "full"]) {
        const sess = { recentKeys: new Set(), recentScenarioIds: new Set() };
        for (let i = 0; i < Math.ceil(n / modes.length / 2); i++) {
          const q = App.Generator.generateQuestion(
            { mode, regions: allRegions, complexity: "mix", tier, strictSynergists: false },
            sess
          );
          tested++;
          if (!q) {
            failures.push(`Null question in ${mode}/${tier}`);
            continue;
          }
          if (q.type === "motion_analysis") {
            if (!q.correctMovementIds.length) failures.push(`No movements in ${q.id}`);
            if (!q.primeMuscleIds.length) failures.push(`No prime muscles in ${q.id}`);
            for (const mid of q.correctMovementIds) {
              const opp = movementMap[mid].oppositeId;
              if (opp && q.correctMovementIds.includes(opp)) {
                failures.push(`Conflicting opposite movements in ${q.id}: ${mid} vs ${opp}`);
              }
            }
          }
        }
      }
    }
    return { tested, failures };
  };

  document.addEventListener("DOMContentLoaded", init);
})(window.AnatomiaApp);
