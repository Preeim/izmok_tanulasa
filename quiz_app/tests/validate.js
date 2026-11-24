const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");

function normalize(str) {
  return String(str || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function main() {
  // 1. Verify obsolete game files are deleted
  const obsoleteFiles = [
    "data/joints.js",
    "data/movements.js",
    "data/muscles.js",
    "data/scenarios.js",
    "js/generator.js",
    "tests/validate_data.py"
  ];
  for (const rel of obsoleteFiles) {
    const full = path.join(ROOT, rel);
    assert.strictEqual(fs.existsSync(full), false, `Obsolete file still exists: ${rel}`);
  }

  // 2. Load data & scoring in a sandboxed VM
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(
    fs.readFileSync(path.join(ROOT, "data/lower_limb_muscles.js"), "utf8"),
    sandbox
  );
  vm.runInContext(
    fs.readFileSync(path.join(ROOT, "js/scoring.js"), "utf8"),
    sandbox
  );

  const App = sandbox.window.AnatomiaApp;
  assert.ok(App && App.DATA && App.Scoring, "AnatomiaApp.DATA and Scoring must exist");

  const { groups, categories, muscles } = App.DATA;
  assert.strictEqual(groups.length, 3, "Expected 3 muscle groups");
  assert.strictEqual(categories.length, 4, "Expected 4 categories");
  assert.strictEqual(muscles.length, 47, `Expected 47 muscles, got ${muscles.length}`);

  const groupIds = new Set(groups.map((g) => g.id));
  const seenIds = new Set();
  const poolMaps = {
    origin: new Map(),
    insertion: new Map(),
    innervation: new Map(),
    function: new Map()
  };

  for (const m of muscles) {
    assert.ok(m.id && typeof m.id === "string", "Muscle missing id");
    assert.strictEqual(seenIds.has(m.id), false, `Duplicate muscle id: ${m.id}`);
    seenIds.add(m.id);

    assert.ok(m.latin && m.latin.trim().length > 0, `Muscle ${m.id} missing latin`);
    assert.ok(m.hungarian && m.hungarian.trim().length > 0, `Muscle ${m.id} missing hungarian`);
    assert.ok(m.subgroup && m.subgroup.trim().length > 0, `Muscle ${m.id} missing subgroup`);
    assert.ok(Array.isArray(m.groups) && m.groups.length > 0, `Muscle ${m.id} missing groups`);
    for (const gid of m.groups) {
      assert.ok(groupIds.has(gid), `Muscle ${m.id} references unknown group ${gid}`);
    }

    for (const cat of categories) {
      const arr = m[cat.id];
      assert.ok(
        Array.isArray(arr) && arr.length > 0,
        `Muscle ${m.id} has empty category ${cat.id}`
      );
      const localSet = new Set();
      for (const rawItem of arr) {
        assert.strictEqual(typeof rawItem, "string", `Non-string item in ${m.id}.${cat.id}`);
        const item = rawItem.trim();
        assert.strictEqual(item, rawItem, `Untrimmed item in ${m.id}.${cat.id}: "${rawItem}"`);
        assert.ok(item.length > 0, `Empty item in ${m.id}.${cat.id}`);
        assert.strictEqual(
          localSet.has(item),
          false,
          `Duplicate item in ${m.id}.${cat.id}: "${item}"`
        );
        localSet.add(item);

        const norm = normalize(item);
        const existing = poolMaps[cat.id].get(norm);
        if (existing && existing !== item) {
          throw new Error(
            `Near-duplicate in ${cat.id}: "${existing}" vs "${item}"`
          );
        }
        poolMaps[cat.id].set(norm, item);
      }
    }
  }

  // 3. Unit test Scoring
  const { evaluateCategory, evaluateMuscle } = App.Scoring;
  const perfectCat = evaluateCategory(["A", "B"], ["A", "B"]);
  assert.strictEqual(perfectCat.percent, 100);
  assert.strictEqual(perfectCat.isPerfect, true);

  const partialCat = evaluateCategory(["A", "X"], ["A", "B"]);
  assert.strictEqual(partialCat.isPerfect, false);
  assert.deepStrictEqual(Array.from(partialCat.correct), ["A"]);
  assert.deepStrictEqual(Array.from(partialCat.wrong), ["X"]);
  assert.deepStrictEqual(Array.from(partialCat.missing), ["B"]);
  assert.strictEqual(partialCat.percent, 50);

  const emptyCat = evaluateCategory([], ["A", "B"]);
  assert.strictEqual(emptyCat.percent, 0);
  assert.deepStrictEqual(Array.from(emptyCat.missing), ["A", "B"]);

  const sampleMuscle = muscles.find((m) => m.id === "m_gluteus_maximus");
  const fullEval = evaluateMuscle(
    {
      origin: sampleMuscle.origin.slice(),
      insertion: sampleMuscle.insertion.slice(),
      innervation: sampleMuscle.innervation.slice(),
      function: sampleMuscle.function.slice()
    },
    sampleMuscle,
    ["origin", "insertion", "innervation", "function"]
  );
  assert.strictEqual(fullEval.percent, 100);
  assert.strictEqual(fullEval.isPerfect, true);

  // 4. Static checks on index.html, style.css, app.js
  const indexHtml = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  const styleCss = fs.readFileSync(path.join(ROOT, "css/style.css"), "utf8");
  const appJs = fs.readFileSync(path.join(ROOT, "js/app.js"), "utf8");

  // Check asset references
  for (const match of indexHtml.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const ref = match[1];
    assert.ok(fs.existsSync(path.join(ROOT, ref)), `Missing asset referenced in index.html: ${ref}`);
  }

  // Check DOM IDs used by app.js exist in index.html
  const definedIds = new Set(
    Array.from(indexHtml.matchAll(/id="([^"]+)"/g), (m) => m[1])
  );
  for (const match of appJs.matchAll(/getElementById\("([^"]+)"\)/g)) {
    const uid = match[1];
    assert.ok(definedIds.has(uid), `app.js references missing DOM id: ${uid}`);
  }

  // Check zero emojis in UI files
  const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  assert.strictEqual(emojiRegex.test(indexHtml), false, "Emoji found in index.html");
  assert.strictEqual(emojiRegex.test(styleCss), false, "Emoji found in style.css");
  assert.strictEqual(emojiRegex.test(appJs), false, "Emoji found in app.js");

  console.log("Validation PASSED:");
  console.log(`- Muscles: ${muscles.length}`);
  for (const cat of categories) {
    console.log(`- Unique ${cat.id} options: ${poolMaps[cat.id].size}`);
  }
}

main();
