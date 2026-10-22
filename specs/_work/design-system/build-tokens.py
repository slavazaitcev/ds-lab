#!/usr/bin/env python3
"""Merge the raw token export into a single DTCG file.

Input : tokens/primitive.json, tokens/semantic/light.tokens.json,
        tokens/semantic/dark.tokens.json (repo root)
Output: design-system/tokens.json (repo root)

Shape: every leaf becomes {"$type":"color","$value":"<light hex>",
        "$extensions":{"com.autumn.modes":{"light":..,"dark":..}}}.
Primitives carry their single value under "primitive".
Run:  python3 build-tokens.py
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
# This script lives in _work/design-system/; the repository root is two levels up.
REPO = os.path.dirname(os.path.dirname(HERE))

def load(p):
    with open(p, encoding="utf-8") as f:
        return json.load(f)

def leaves(node, path=()):
    """Yield (path_tuple, leaf_dict) for every dict that has a $type."""
    if isinstance(node, dict):
        if "$type" in node and "$value" in node:
            yield path, node
            return
        for k, v in node.items():
            if k.startswith("$"):
                continue
            yield from leaves(v, path + (k,))

def hex_of(leaf):
    v = leaf.get("$value")
    if isinstance(v, dict):
        return v.get("hex", "")
    return v if isinstance(v, str) else ""

def main():
    prim = load(os.path.join(REPO, "tokens", "primitive.json"))
    light = load(os.path.join(REPO, "tokens", "semantic", "light.tokens.json"))
    dark = load(os.path.join(REPO, "tokens", "semantic", "dark.tokens.json"))

    out = {
        "$description": (
            "Сводный экспорт токенов UI-кита autumn-ui (формат DTCG). "
            "Листья несут $value (значение темы light) и "
            "$extensions['com.autumn.modes'] со значениями по темам. "
            "Сгенерировано из tokens/ скриптом build-tokens.py."
        ),
        "color": {"primitive": {}, "semantic": {}},
        "dimension": {},
        "fontFamily": {},
        "fontWeight": {},
        "number": {},
        "shadow": {},
        "duration": {},
        "cubicBezier": {},
    }

    # primitives
    for path, leaf in leaves(prim.get("color", {})):
        node = out["color"]["primitive"]
        for k in path[:-1]:
            node = node.setdefault(k, {})
        node[path[-1]] = {
            "$type": "color",
            "$value": hex_of(leaf),
            "$extensions": {"com.autumn.scopes": leaf.get("$extensions", {}).get("com.figma.scopes", [])},
        }

    # semantic, merged per-theme
    light_map = {"/".join(p): l for p, l in leaves(light.get("color", {}))}
    dark_map = {"/".join(p): l for p, l in leaves(dark.get("color", {}))}
    keys = sorted(set(light_map) | set(dark_map))
    for key in keys:
        l = light_map.get(key)
        d = dark_map.get(key)
        node = out["color"]["semantic"]
        parts = key.split("/")
        for k in parts[:-1]:
            node = node.setdefault(k, {})
        ext = {"com.autumn.modes": {"light": hex_of(l) if l else None,
                                    "dark": hex_of(d) if d else None}}
        desc = (l or d or {}).get("$description")
        entry = {"$type": "color", "$value": hex_of(l) if l else (hex_of(d) if d else None),
                 "$extensions": ext}
        if desc:
            entry["$description"] = desc
        node[parts[-1]] = entry

    with open(os.path.join(REPO, "design-system", "tokens.json"), "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
        f.write("\n")

    n_prim = len(prim_map := list(leaves(prim.get("color", {}))))
    print(f"primitives: {len(list(leaves(prim.get('color', {}))))}")
    print(f"semantic leaves: {len(keys)}")

if __name__ == "__main__":
    main()
