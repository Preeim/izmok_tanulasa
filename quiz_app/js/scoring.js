window.AnatomiaApp = window.AnatomiaApp || {};

(function (App) {
  const STORAGE_KEY = "anatomia_lower_limb_stats_v1";

  function evaluateCategory(selectedValues, expectedValues) {
    const selected = Array.from(
      new Set(
        (selectedValues || [])
          .map((v) => String(v || "").trim())
          .filter(Boolean)
      )
    );
    const expected = Array.from(
      new Set(
        (expectedValues || [])
          .map((v) => String(v || "").trim())
          .filter(Boolean)
      )
    );
    const expectedSet = new Set(expected);
    const selectedSet = new Set(selected);

    const correct = selected.filter((v) => expectedSet.has(v));
    const wrong = selected.filter((v) => !expectedSet.has(v));
    const missing = expected.filter((v) => !selectedSet.has(v));

    let percent = 0;
    if (expected.length === 0) {
      percent = wrong.length === 0 ? 100 : 0;
    } else if (correct.length > 0) {
      percent = Math.round(
        ((2 * correct.length) / (expected.length + correct.length + wrong.length)) * 100
      );
    }

    return {
      percent,
      isPerfect: missing.length === 0 && wrong.length === 0,
      correct,
      wrong,
      missing,
      expectedCount: expected.length
    };
  }

  function evaluateMuscle(selectionsByCategory, muscle, activeCategoryIds) {
    const byCategory = {};
    let totalHits = 0;
    let totalExpected = 0;
    let totalWrong = 0;

    (activeCategoryIds || []).forEach((catId) => {
      const res = evaluateCategory(
        selectionsByCategory[catId] || [],
        muscle[catId] || []
      );
      byCategory[catId] = res;
      totalHits += res.correct.length;
      totalExpected += res.expectedCount;
      totalWrong += res.wrong.length;
    });

    let percent = 0;
    if (totalExpected === 0) {
      percent = totalWrong === 0 ? 100 : 0;
    } else if (totalHits > 0) {
      percent = Math.round(
        ((2 * totalHits) / (totalExpected + totalHits + totalWrong)) * 100
      );
    }

    const isPerfect =
      (activeCategoryIds || []).length > 0 &&
      (activeCategoryIds || []).every((catId) => byCategory[catId].isPerfect);

    return {
      percent,
      isPerfect,
      byCategory
    };
  }

  function defaultStats() {
    return {
      totalAnswered: 0,
      perfectCount: 0,
      scoreSum: 0,
      missedMuscles: {}
    };
  }

  function loadStats() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultStats();
      const parsed = JSON.parse(raw);
      return Object.assign(defaultStats(), parsed, {
        missedMuscles: Object.assign({}, parsed.missedMuscles || {})
      });
    } catch (e) {
      return defaultStats();
    }
  }

  function saveStats(stats) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
      // Ignore storage quota or private mode restrictions
    }
  }

  function recordResult(muscleId, percent, isPerfect) {
    const stats = loadStats();
    stats.totalAnswered += 1;
    stats.scoreSum += percent;
    if (isPerfect) {
      stats.perfectCount += 1;
      if (muscleId && stats.missedMuscles[muscleId]) {
        if (stats.missedMuscles[muscleId] <= 1) {
          delete stats.missedMuscles[muscleId];
        } else {
          stats.missedMuscles[muscleId] -= 1;
        }
      }
    } else if (muscleId) {
      stats.missedMuscles[muscleId] = (stats.missedMuscles[muscleId] || 0) + 1;
    }
    saveStats(stats);
    return stats;
  }

  function resetStats() {
    const fresh = defaultStats();
    saveStats(fresh);
    return fresh;
  }

  App.Scoring = {
    evaluateCategory,
    evaluateMuscle,
    loadStats,
    recordResult,
    resetStats
  };
})(window.AnatomiaApp);
