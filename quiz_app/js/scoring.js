window.AnatomiaApp = window.AnatomiaApp || {};

(function (App) {
  const STORAGE_KEY = "anatomia_quiz_stats_v1";

  function evaluateSet(selectedIds, primeIds, synergistIds, options) {
    const opts = options || {};
    const selected = Array.from(new Set(selectedIds || []));
    const primeSet = new Set(primeIds || []);
    const synSet = new Set((synergistIds || []).filter((id) => !primeSet.has(id)));

    const expectedSet = opts.strictSynergists
      ? new Set([...primeSet, ...synSet])
      : primeSet;

    const correctPrime = [];
    const bonusSynergist = [];
    const wrong = [];

    selected.forEach((id) => {
      if (expectedSet.has(id)) {
        correctPrime.push(id);
      } else if (!opts.strictSynergists && synSet.has(id)) {
        bonusSynergist.push(id);
      } else {
        wrong.push(id);
      }
    });

    const selectedSet = new Set(selected);
    const missedPrime = Array.from(expectedSet).filter((id) => !selectedSet.has(id));
    const unselectedSynergists = opts.strictSynergists
      ? []
      : Array.from(synSet).filter((id) => !selectedSet.has(id));

    const totalExpected = expectedSet.size;
    const hits = correctPrime.length;
    const fp = wrong.length;

    let percent = 0;
    if (totalExpected === 0) {
      percent = fp === 0 ? 100 : 0;
    } else if (hits > 0) {
      // F1-based fair partial score that does not penalize synergist bonuses
      percent = Math.round(((2 * hits) / (totalExpected + hits + fp)) * 100);
    }

    return {
      percent,
      isPerfect: missedPrime.length === 0 && wrong.length === 0 && totalExpected > 0,
      correctPrime,
      missedPrime,
      bonusSynergist,
      unselectedSynergists,
      wrong
    };
  }

  function evaluateSingleChoice(selectedId, correctId) {
    const isCorrect = selectedId === correctId;
    return {
      percent: isCorrect ? 100 : 0,
      isPerfect: isCorrect,
      correctPrime: isCorrect ? [correctId] : [],
      missedPrime: isCorrect ? [] : [correctId],
      bonusSynergist: [],
      unselectedSynergists: [],
      wrong: !isCorrect && selectedId ? [selectedId] : []
    };
  }

  function defaultStats() {
    return {
      totalAnswered: 0,
      perfectCount: 0,
      scoreSum: 0,
      streak: 0,
      bestStreak: 0,
      missedMovements: {},
      missedMuscles: {}
    };
  }

  function loadStats() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultStats();
      return Object.assign(defaultStats(), JSON.parse(raw));
    } catch (e) {
      return defaultStats();
    }
  }

  function saveStats(stats) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
      // Ignore storage quota / private mode errors
    }
  }

  function recordResult(overallPercent, missedMovementIds, missedMuscleIds) {
    const stats = loadStats();
    stats.totalAnswered += 1;
    stats.scoreSum += overallPercent;
    if (overallPercent >= 80) {
      stats.streak += 1;
      if (stats.streak > stats.bestStreak) stats.bestStreak = stats.streak;
    } else {
      stats.streak = 0;
    }
    if (overallPercent === 100) {
      stats.perfectCount += 1;
    }
    (missedMovementIds || []).forEach((id) => {
      stats.missedMovements[id] = (stats.missedMovements[id] || 0) + 1;
    });
    (missedMuscleIds || []).forEach((id) => {
      stats.missedMuscles[id] = (stats.missedMuscles[id] || 0) + 1;
    });
    saveStats(stats);
    return stats;
  }

  function resetStats() {
    const fresh = defaultStats();
    saveStats(fresh);
    return fresh;
  }

  App.Scoring = {
    evaluateSet,
    evaluateSingleChoice,
    loadStats,
    recordResult,
    resetStats
  };
})(window.AnatomiaApp);
