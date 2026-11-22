window.AnatomiaApp = window.AnatomiaApp || {};

(function (App) {
  function shuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function pickOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getIndexes() {
    if (App._indexes) return App._indexes;
    const { regions, joints, movements, muscles, scenarios } = App.DATA;
    const regionMap = {};
    const jointMap = {};
    const movementMap = {};
    const muscleMap = {};
    regions.forEach((r) => (regionMap[r.id] = r));
    joints.forEach((j) => (jointMap[j.id] = j));
    movements.forEach((m) => (movementMap[m.id] = m));
    muscles.forEach((ms) => (muscleMap[ms.id] = ms));
    App._indexes = { regionMap, jointMap, movementMap, muscleMap, regions, joints, movements, muscles, scenarios };
    return App._indexes;
  }

  function getMusclesByTier(tier) {
    const { muscles } = getIndexes();
    if (tier === "core") {
      return muscles.filter((m) => m.tier === "core");
    }
    return muscles.slice();
  }

  function getMusclesForMovements(movementIds, tier) {
    const pool = getMusclesByTier(tier);
    const mvSet = new Set(movementIds);
    const primeIds = [];
    const synergistIds = [];
    const muscleReasons = {};

    pool.forEach((ms) => {
      const matched = (ms.actions || []).filter((a) => mvSet.has(a.movementId));
      if (matched.length === 0) return;
      muscleReasons[ms.id] = matched;
      const isPrime = matched.some((a) => a.role === "prime");
      if (isPrime) {
        primeIds.push(ms.id);
      } else {
        synergistIds.push(ms.id);
      }
    });

    return { primeIds, synergistIds, muscleReasons };
  }

  function composeEverydayDescription(selectedMovements) {
    const phrases = selectedMovements.map((m) => pickOne(m.everydayPhrases));
    if (phrases.length === 1) {
      const templates = [
        `Képzeld el, hogy ${phrases[0]}.`,
        `Egy mozdulat során ${phrases[0]}.`,
        `Ellenállással szemben ${phrases[0]}.`,
        `A gyakorlat aktív fázisában ${phrases[0]}.`
      ];
      return pickOne(templates);
    }
    if (phrases.length === 2) {
      const templates = [
        `Egy összetett mozdulat közben ${phrases[0]}, miközben ${phrases[1]}.`,
        `Képzeld el, hogy egyszerre ${phrases[0]} és ${phrases[1]}.`,
        `A gyakorlat során ${phrases[0]}, ezzel egy időben pedig ${phrases[1]}.`,
        `Aktív izommunkával ${phrases[0]}, közben pedig ${phrases[1]}.`
      ];
      return pickOne(templates);
    }
    const templates = [
      `Egy összetett mozdulat során ${phrases[0]}, közben ${phrases[1]}, és mindezzel együtt ${phrases[2]}.`,
      `Képzeld el, hogy egyszerre ${phrases[0]}, emellett ${phrases[1]}, továbbá ${phrases[2]}.`,
      `A mozgás aktív fázisában ${phrases[0]}, miközben ${phrases[1]}, végül ${phrases[2]}.`
    ];
    return pickOne(templates);
  }

  function buildMovementOptions(correctIds, allowedRegions) {
    const { movements, movementMap } = getIndexes();
    const regionSet = new Set(allowedRegions);
    const correctSet = new Set(correctIds);
    const selected = new Set(correctIds);
    const targetCount = Math.max(correctIds.length + 5, Math.min(12, correctIds.length * 3 + 3));

    // Priority 1: Opposites of correct movements
    correctIds.forEach((id) => {
      const mv = movementMap[id];
      if (mv && mv.oppositeId && selected.size < targetCount) {
        selected.add(mv.oppositeId);
      }
    });

    // Priority 2: Other movements from the same joints
    const correctJoints = new Set(correctIds.map((id) => movementMap[id].jointId));
    const sameJointPool = shuffle(
      movements.filter((m) => correctJoints.has(m.jointId) && !selected.has(m.id))
    );
    for (const m of sameJointPool) {
      if (selected.size >= targetCount) break;
      selected.add(m.id);
    }

    // Priority 3: Other movements from the same regions
    const correctRegions = new Set(correctIds.map((id) => movementMap[id].region));
    const sameRegionPool = shuffle(
      movements.filter(
        (m) => (correctRegions.has(m.region) || regionSet.has(m.region)) && !selected.has(m.id)
      )
    );
    for (const m of sameRegionPool) {
      if (selected.size >= targetCount) break;
      selected.add(m.id);
    }

    // Priority 4: Any remaining movements
    if (selected.size < targetCount) {
      for (const m of shuffle(movements)) {
        if (selected.size >= targetCount) break;
        selected.add(m.id);
      }
    }

    return shuffle(Array.from(selected));
  }

  function buildMuscleOptions(primeIds, synergistIds, tier, movementIds, allowedRegions) {
    const { movementMap } = getIndexes();
    const pool = getMusclesByTier(tier);
    const selected = new Set(primeIds);

    // Include up to 2 synergists in options so user can spot bonus synergists
    const synSample = shuffle(synergistIds).slice(0, Math.min(2, synergistIds.length));
    synSample.forEach((id) => selected.add(id));

    const targetCount = Math.max(selected.size + 5, Math.min(16, primeIds.length + 7));

    // Priority 1: Antagonist muscles (primes of opposite movements)
    const oppIds = movementIds
      .map((id) => movementMap[id] && movementMap[id].oppositeId)
      .filter(Boolean);
    if (oppIds.length > 0) {
      const oppRes = getMusclesForMovements(oppIds, tier);
      for (const id of shuffle(oppRes.primeIds)) {
        if (selected.size >= targetCount) break;
        selected.add(id);
      }
    }

    // Priority 2: Other muscles from the same regions
    const involvedRegions = new Set(movementIds.map((id) => movementMap[id].region));
    const sameRegion = shuffle(
      pool.filter((m) => involvedRegions.has(m.region) && !selected.has(m.id))
    );
    for (const m of sameRegion) {
      if (selected.size >= targetCount) break;
      selected.add(m.id);
    }

    // Priority 3: Allowed regions / any tier muscles
    const regionSet = new Set(allowedRegions);
    const allowedPool = shuffle(
      pool.filter((m) => regionSet.has(m.region) && !selected.has(m.id))
    );
    for (const m of allowedPool) {
      if (selected.size >= targetCount) break;
      selected.add(m.id);
    }

    if (selected.size < targetCount) {
      for (const m of shuffle(pool)) {
        if (selected.size >= targetCount) break;
        selected.add(m.id);
      }
    }

    return shuffle(Array.from(selected));
  }

  function generateComboQuestion(config, recentKeys) {
    const { joints, movements, jointMap } = getIndexes();
    const regionSet = new Set(config.regions);
    const allowedMovements = movements.filter((m) => regionSet.has(m.region));

    // Group allowed movements by joint
    const byJoint = {};
    allowedMovements.forEach((m) => {
      if (!byJoint[m.jointId]) byJoint[m.jointId] = [];
      byJoint[m.jointId].push(m);
    });

    const availableJointIds = Object.keys(byJoint);
    if (availableJointIds.length === 0) return null;

    let count = 1;
    if (config.complexity === "mix") {
      const maxC = Math.min(3, availableJointIds.length);
      const weights = maxC === 1 ? [1] : maxC === 2 ? [1, 2, 2] : [1, 2, 2, 3, 3];
      count = pickOne(weights);
    } else {
      count = Math.min(parseInt(config.complexity, 10) || 1, availableJointIds.length);
    }

    // Try up to 15 times to avoid recent exact duplicates and keep biomechanical coherence
    let chosenMovements = null;
    for (let attempt = 0; attempt < 15; attempt++) {
      let pickedJointIds = [];

      // 75% chance to stay within a single biomechanical chain if possible
      const chains = {};
      availableJointIds.forEach((jid) => {
        const ch = jointMap[jid].chain;
        if (!chains[ch]) chains[ch] = [];
        chains[ch].push(jid);
      });
      const eligibleChains = Object.values(chains).filter((arr) => arr.length >= count);

      if (eligibleChains.length > 0 && Math.random() < 0.75) {
        const chainJoints = pickOne(eligibleChains);
        pickedJointIds = shuffle(chainJoints).slice(0, count);
      } else {
        pickedJointIds = shuffle(availableJointIds).slice(0, count);
      }

      // If weakOnly enabled, bias one movement toward missedMovements
      const weakMovements = config.weakMovementIds || [];
      const candidate = pickedJointIds.map((jid, idx) => {
        if (idx === 0 && config.weakOnly && weakMovements.length > 0) {
          const weakInJoint = byJoint[jid].filter((m) => weakMovements.includes(m.id));
          if (weakInJoint.length > 0) return pickOne(weakInJoint);
        }
        return pickOne(byJoint[jid]);
      });

      const key = candidate.map((m) => m.id).sort().join("|");
      chosenMovements = candidate;
      if (!recentKeys || !recentKeys.has(key)) {
        if (recentKeys) recentKeys.add(key);
        break;
      }
    }

    const movementIds = chosenMovements.map((m) => m.id);
    const { primeIds, synergistIds, muscleReasons } = getMusclesForMovements(
      movementIds,
      config.tier
    );
    const involvedRegions = Array.from(new Set(chosenMovements.map((m) => m.region)));

    return {
      id: "combo_" + movementIds.join("_") + "_" + Date.now(),
      type: "motion_analysis",
      sourceBadge: count === 1 ? "Kombinatorikus • 1 ízület" : `Kombinatorikus • ${count} ízület kombinációja`,
      sourceKind: "combo",
      title: count === 1 ? "Elemi mozdulat elemzése" : "Összetett mozdulat elemzése",
      description: composeEverydayDescription(chosenMovements),
      regions: involvedRegions,
      correctMovementIds: movementIds,
      movementOptions: buildMovementOptions(movementIds, config.regions),
      primeMuscleIds: primeIds,
      synergistMuscleIds: synergistIds,
      muscleOptions: buildMuscleOptions(primeIds, synergistIds, config.tier, movementIds, config.regions),
      muscleReasons,
      note: null
    };
  }

  function generateScenarioQuestion(config, recentScenarioIds) {
    const { scenarios } = getIndexes();
    const regionSet = new Set(config.regions);
    let eligible = scenarios.filter((sc) =>
      sc.regions.some((r) => regionSet.has(r))
    );
    if (eligible.length === 0) return null;

    let fresh = eligible.filter((sc) => !recentScenarioIds || !recentScenarioIds.has(sc.id));
    if (fresh.length === 0) {
      if (recentScenarioIds) recentScenarioIds.clear();
      fresh = eligible;
    }
    const sc = pickOne(fresh);
    if (recentScenarioIds) recentScenarioIds.add(sc.id);

    const { primeIds, synergistIds, muscleReasons } = getMusclesForMovements(
      sc.movementIds,
      config.tier
    );

    return {
      id: sc.id + "_" + Date.now(),
      type: "motion_analysis",
      sourceBadge: sc.category === "sport" ? "🏋️ Sport-mozdulat" : "🏠 Hétköznapi mozdulat",
      sourceKind: "scenario",
      title: sc.title,
      description: sc.description,
      regions: sc.regions,
      correctMovementIds: sc.movementIds.slice(),
      movementOptions: buildMovementOptions(sc.movementIds, config.regions),
      primeMuscleIds: primeIds,
      synergistMuscleIds: synergistIds,
      muscleOptions: buildMuscleOptions(primeIds, synergistIds, config.tier, sc.movementIds, config.regions),
      muscleReasons,
      note: sc.note
    };
  }

  function generateReverseQuestion(config, recentKeys) {
    const { movementMap } = getIndexes();
    const regionSet = new Set(config.regions);
    const pool = getMusclesByTier(config.tier).filter(
      (m) => regionSet.has(m.region) && m.actions && m.actions.some((a) => a.role === "prime")
    );
    if (pool.length === 0) return null;

    let muscle = null;
    for (let i = 0; i < 12; i++) {
      const candidate = pickOne(pool);
      muscle = candidate;
      if (!recentKeys || !recentKeys.has("rev_" + candidate.id)) {
        if (recentKeys) recentKeys.add("rev_" + candidate.id);
        break;
      }
    }

    const primeMovementIds = muscle.actions
      .filter((a) => a.role === "prime")
      .map((a) => a.movementId);
    const synergistMovementIds = muscle.actions
      .filter((a) => a.role === "synergist")
      .map((a) => a.movementId);

    const allInvolved = Array.from(new Set([...primeMovementIds, ...synergistMovementIds]));
    const options = buildMovementOptions(allInvolved, config.regions);

    return {
      id: "rev_" + muscle.id + "_" + Date.now(),
      type: "reverse",
      sourceBadge: "🔄 Fordított mód • Izom → Mozgás",
      muscleId: muscle.id,
      regions: [muscle.region],
      primeMovementIds,
      synergistMovementIds,
      movementOptions: options,
      note: muscle.functionText
    };
  }

  function generateAnatomyFactQuestion(config, recentKeys) {
    const regionSet = new Set(config.regions);
    const pool = getMusclesByTier(config.tier).filter((m) => regionSet.has(m.region));
    if (pool.length < 4) return null;

    const fields = [
      { key: "origin", label: "Eredés" },
      { key: "insertion", label: "Tapadás" },
      { key: "innervation", label: "Beidegzés" }
    ];

    let muscle = null;
    let field = null;
    for (let i = 0; i < 12; i++) {
      muscle = pickOne(pool);
      field = pickOne(fields);
      const k = `fact_${muscle.id}_${field.key}`;
      if (!recentKeys || !recentKeys.has(k)) {
        if (recentKeys) recentKeys.add(k);
        break;
      }
    }

    const correctValue = muscle[field.key];
    // Pick 3 distinct distractor values, preferring same region
    const sameRegion = shuffle(pool.filter((m) => m.id !== muscle.id && m.region === muscle.region));
    const otherRegion = shuffle(pool.filter((m) => m.id !== muscle.id && m.region !== muscle.region));
    const candidates = [...sameRegion, ...otherRegion];

    const seenValues = new Set([correctValue.toLowerCase().trim()]);
    const options = [{ id: "opt_correct", text: correctValue, isCorrect: true }];

    for (const c of candidates) {
      if (options.length >= 4) break;
      const val = c[field.key];
      const norm = val.toLowerCase().trim();
      if (!seenValues.has(norm)) {
        seenValues.add(norm);
        options.push({ id: "opt_" + c.id, text: val, isCorrect: false });
      }
    }

    return {
      id: `fact_${muscle.id}_${field.key}_${Date.now()}`,
      type: "anatomy_fact",
      sourceBadge: `🧬 Anatómiai villámkvíz • ${field.label}`,
      muscleId: muscle.id,
      fieldKey: field.key,
      fieldLabel: field.label,
      correctOptionId: "opt_correct",
      options: shuffle(options),
      regions: [muscle.region]
    };
  }

  function generateMovementTermQuestion(config, recentKeys) {
    const { movements } = getIndexes();
    const regionSet = new Set(config.regions);
    const pool = movements.filter((m) => regionSet.has(m.region));
    if (pool.length < 2) return null;

    let mv = null;
    for (let i = 0; i < 12; i++) {
      mv = pickOne(pool);
      if (!recentKeys || !recentKeys.has("term_" + mv.id)) {
        if (recentKeys) recentKeys.add("term_" + mv.id);
        break;
      }
    }

    const phrase = pickOne(mv.everydayPhrases);
    const optionIds = buildMovementOptions([mv.id], config.regions).slice(0, 6);
    if (!optionIds.includes(mv.id)) {
      optionIds[0] = mv.id;
    }

    return {
      id: `term_${mv.id}_${Date.now()}`,
      type: "movement_term",
      sourceBadge: "🧭 Mozgásfajta-edző",
      movementId: mv.id,
      promptPhrase: phrase,
      optionIds: shuffle(optionIds),
      hint: mv.hint,
      regions: [mv.region]
    };
  }

  function generateQuestion(config, sessionState) {
    const recentKeys = sessionState.recentKeys;
    const recentScenarioIds = sessionState.recentScenarioIds;

    switch (config.mode) {
      case "combo_only":
        return generateComboQuestion(config, recentKeys);
      case "scenarios_only":
        return generateScenarioQuestion(config, recentScenarioIds) || generateComboQuestion(config, recentKeys);
      case "combo_mixed": {
        const useScenario = Math.random() < 0.38;
        if (useScenario) {
          const sc = generateScenarioQuestion(config, recentScenarioIds);
          if (sc) return sc;
        }
        return generateComboQuestion(config, recentKeys);
      }
      case "reverse":
        return generateReverseQuestion(config, recentKeys);
      case "anatomy_facts":
        return generateAnatomyFactQuestion(config, recentKeys);
      case "movement_terms":
        return generateMovementTermQuestion(config, recentKeys);
      default:
        return generateComboQuestion(config, recentKeys);
    }
  }

  function countPossibleCombos(regions, complexity) {
    const { movements } = getIndexes();
    const regionSet = new Set(regions);
    const allowed = movements.filter((m) => regionSet.has(m.region));
    const byJoint = {};
    allowed.forEach((m) => {
      byJoint[m.jointId] = (byJoint[m.jointId] || 0) + 1;
    });
    const counts = Object.values(byJoint);
    const c1 = counts.reduce((a, b) => a + b, 0);
    let c2 = 0;
    let c3 = 0;
    for (let i = 0; i < counts.length; i++) {
      for (let j = i + 1; j < counts.length; j++) {
        c2 += counts[i] * counts[j];
        for (let k = j + 1; k < counts.length; k++) {
          c3 += counts[i] * counts[j] * counts[k];
        }
      }
    }
    if (complexity === "1") return c1;
    if (complexity === "2") return c2;
    if (complexity === "3") return c3;
    return c1 + c2 + c3;
  }

  App.Generator = {
    getIndexes,
    getMusclesByTier,
    getMusclesForMovements,
    buildMuscleOptions,
    generateQuestion,
    countPossibleCombos
  };
})(window.AnatomiaApp);
