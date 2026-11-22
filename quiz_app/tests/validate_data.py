import json
import math
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"


def load_js_assignment(path: pathlib.Path, var_name: str):
    text = path.read_text(encoding="utf-8")
    pattern = rf"window\.AnatomiaApp\.DATA\.{re.escape(var_name)}\s*=\s*(\[[\s\S]*?\]);"
    match = re.search(pattern, text)
    if not match:
        raise ValueError(f"Could not find assignment for {var_name} in {path}")
    return json.loads(match.group(1))


def main():
    errors = []

    regions = load_js_assignment(DATA_DIR / "joints.js", "regions")
    joints = load_js_assignment(DATA_DIR / "joints.js", "joints")
    movements = load_js_assignment(DATA_DIR / "movements.js", "movements")
    muscles = load_js_assignment(DATA_DIR / "muscles.js", "muscles")
    scenarios = load_js_assignment(DATA_DIR / "scenarios.js", "scenarios")

    def check_unique_ids(items, name):
        seen = set()
        for item in items:
            if item["id"] in seen:
                errors.append(f"Duplicate id in {name}: {item['id']}")
            seen.add(item["id"])
        return {item["id"]: item for item in items}

    region_map = check_unique_ids(regions, "regions")
    joint_map = check_unique_ids(joints, "joints")
    movement_map = check_unique_ids(movements, "movements")
    muscle_map = check_unique_ids(muscles, "muscles")
    scenario_map = check_unique_ids(scenarios, "scenarios")

    # Validate joints
    for j in joints:
        if j["region"] not in region_map:
            errors.append(f"Joint {j['id']} has unknown region {j['region']}")

    # Validate movements
    for m in movements:
        if m["jointId"] not in joint_map:
            errors.append(f"Movement {m['id']} has unknown jointId {m['jointId']}")
        if m["region"] not in region_map:
            errors.append(f"Movement {m['id']} has unknown region {m['region']}")
        opp = m.get("oppositeId")
        if opp is not None:
            if opp not in movement_map:
                errors.append(f"Movement {m['id']} has unknown oppositeId {opp}")
            elif movement_map[opp].get("oppositeId") != m["id"]:
                errors.append(
                    f"Asymmetric oppositeId: {m['id']} -> {opp}, "
                    f"but {opp} -> {movement_map[opp].get('oppositeId')}"
                )
        if not m.get("everydayPhrases") or len(m["everydayPhrases"]) < 2:
            errors.append(f"Movement {m['id']} needs at least 2 everydayPhrases")

    # Validate muscles
    prime_by_movement_core = {mid: [] for mid in movement_map}
    prime_by_movement_all = {mid: [] for mid in movement_map}

    for ms in muscles:
        if ms["region"] not in region_map:
            errors.append(f"Muscle {ms['id']} has unknown region {ms['region']}")
        if ms["tier"] not in ("core", "full"):
            errors.append(f"Muscle {ms['id']} has invalid tier {ms['tier']}")
        seen_actions = set()
        for act in ms.get("actions", []):
            mid = act["movementId"]
            role = act["role"]
            if mid not in movement_map:
                errors.append(f"Muscle {ms['id']} references unknown movementId {mid}")
                continue
            if role not in ("prime", "synergist"):
                errors.append(f"Muscle {ms['id']} has invalid role {role} for {mid}")
            if mid in seen_actions:
                errors.append(f"Muscle {ms['id']} lists movement {mid} twice")
            seen_actions.add(mid)
            if role == "prime":
                prime_by_movement_all[mid].append(ms["id"])
                if ms["tier"] == "core":
                    prime_by_movement_core[mid].append(ms["id"])

    # Every movement must have >=1 core prime mover
    for mid, plist in prime_by_movement_core.items():
        if not plist:
            errors.append(f"Movement {mid} has NO core prime muscle!")

    # Validate scenarios
    for sc in scenarios:
        mids = sc.get("movementIds", [])
        if not mids:
            errors.append(f"Scenario {sc['id']} has no movementIds")
        if len(mids) != len(set(mids)):
            errors.append(f"Scenario {sc['id']} has duplicate movementIds")
        for r in sc.get("regions", []):
            if r not in region_map:
                errors.append(f"Scenario {sc['id']} has unknown region {r}")
        for mid in mids:
            if mid not in movement_map:
                errors.append(f"Scenario {sc['id']} has unknown movementId {mid}")
                continue
            opp = movement_map[mid].get("oppositeId")
            if opp in mids:
                errors.append(f"Scenario {sc['id']} contains conflicting pair {mid} and {opp}")

    # Static cross-check: verify index.html assets and DOM IDs referenced in app.js
    index_html = (ROOT / "index.html").read_text(encoding="utf-8")
    app_js = (ROOT / "js" / "app.js").read_text(encoding="utf-8")

    for ref in re.findall(r'(?:src|href)="([^"]+)"', index_html):
        if ref.startswith("http"):
            continue
        if not (ROOT / ref).exists():
            errors.append(f"Missing asset referenced in index.html: {ref}")

    defined_ids = set(re.findall(r'id="([^"]+)"', index_html))
    defined_ids.update(re.findall(r'id="([^"]+)"', app_js))
    used_ids = set(re.findall(r'getElementById\("([^"]+)"\)', app_js))
    for uid in sorted(used_ids):
        if uid not in defined_ids:
            errors.append(f"app.js calls getElementById('{uid}') but id is not defined in HTML/templates")

    # Verify balanced braces/parens/brackets in all JS files using a small JS lexer
    def check_js_brackets(path: pathlib.Path):
        s = path.read_text(encoding="utf-8")
        i, n = 0, len(s)
        stack = []
        template_brace_depth = []
        pairs = {"}": "{", ")": "(", "]": "["}
        while i < n:
            ch = s[i]
            nxt = s[i + 1] if i + 1 < n else ""
            # Comments
            if ch == "/" and nxt == "/":
                i = s.find("\n", i)
                i = n if i == -1 else i + 1
                continue
            if ch == "/" and nxt == "*":
                end = s.find("*/", i + 2)
                if end == -1:
                    return f"Unclosed block comment in {path.name}"
                i = end + 2
                continue
            # Regex literal (heuristic: preceded by operator/delimiter)
            if ch == "/":
                j = i - 1
                while j >= 0 and s[j] in " \t":
                    j -= 1
                if j < 0 or s[j] in "(=,:![!&|?{;\n":
                    i += 1
                    in_class = False
                    while i < n:
                        if s[i] == "\\":
                            i += 2
                        elif s[i] == "[":
                            in_class = True
                            i += 1
                        elif s[i] == "]":
                            in_class = False
                            i += 1
                        elif s[i] == "/" and not in_class:
                            i += 1
                            break
                        else:
                            i += 1
                    continue
            # Single/double quoted strings
            if ch in ('"', "'"):
                q = ch
                i += 1
                while i < n and s[i] != q:
                    if s[i] == "\\":
                        i += 2
                    else:
                        i += 1
                i += 1
                continue
            # Template literal
            if ch == "`":
                i += 1
                while i < n:
                    if s[i] == "\\":
                        i += 2
                    elif s[i] == "`":
                        i += 1
                        break
                    elif s[i] == "$" and i + 1 < n and s[i + 1] == "{":
                        stack.append("{")
                        template_brace_depth.append(len(stack))
                        i += 2
                        break
                    else:
                        i += 1
                continue
            if ch in "{([":
                stack.append(ch)
            elif ch in "})]":
                if not stack or stack[-1] != pairs[ch]:
                    return f"Mismatched '{ch}' at offset {i} in {path.name}"
                if ch == "}" and template_brace_depth and len(stack) == template_brace_depth[-1]:
                    stack.pop()
                    template_brace_depth.pop()
                    # Resume scanning template literal
                    i += 1
                    while i < n:
                        if s[i] == "\\":
                            i += 2
                        elif s[i] == "`":
                            i += 1
                            break
                        elif s[i] == "$" and i + 1 < n and s[i + 1] == "{":
                            stack.append("{")
                            template_brace_depth.append(len(stack))
                            i += 2
                            break
                        else:
                            i += 1
                    continue
                stack.pop()
            i += 1
        if stack:
            return f"Unclosed {stack[-1]} in {path.name}"
        return None

    for js_file in sorted((ROOT / "js").glob("*.js")) + sorted(DATA_DIR.glob("*.js")):
        err = check_js_brackets(js_file)
        if err:
            errors.append(err)

    # Calculate theoretical combinatorial possibilities (1, 2, 3 distinct joints)
    by_joint = {}
    for m in movements:
        by_joint.setdefault(m["jointId"], []).append(m)
    counts = [len(v) for v in by_joint.values()]
    c1 = sum(counts)
    c2 = sum(counts[i] * counts[j] for i in range(len(counts)) for j in range(i + 1, len(counts)))
    c3 = sum(
        counts[i] * counts[j] * counts[k]
        for i in range(len(counts))
        for j in range(i + 1, len(counts))
        for k in range(j + 1, len(counts))
    )

    core_muscles = [m for m in muscles if m["tier"] == "core"]
    full_only_muscles = [m for m in muscles if m["tier"] == "full"]

    print("=== ANATOMIA QUIZ ADATBÁZIS VALIDÁCIÓ ===")
    print(f"Tájegységek: {len(regions)}")
    print(f"Ízületek:    {len(joints)}")
    print(f"Mozgások:    {len(movements)}")
    print(f"Izmok:       {len(muscles)} (Alap/core: {len(core_muscles)}, Extra/full: {len(full_only_muscles)})")
    print(f"Forgatókönyvek: {len(scenarios)}")
    print(f"Kombinatorikus variációk (1 / 2 / 3 ízület): {c1} / {c2} / {c3} (Összesen: {c1 + c2 + c3:,})")

    if errors:
        print(f"\nHIBA ({len(errors)} db):")
        for e in errors:
            print("  -", e)
        sys.exit(1)
    else:
        print("\nMINDEN ELLENŐRZÉS SIKERES! (0 hiba)")


if __name__ == "__main__":
    main()
