# AGENTS.md

Instructions for AI agents working in **autumn-design-system**.

## What this repository is

This is **not a software project**. It is a documentation/research repository
that produces a design-system specification. There is no `package.json`, no
source code, no build, test, lint, or typecheck step. Content is Markdown
(mostly Russian), DTCG JSON tokens, and a few Python/shell helper scripts.

The actual `autumn-ui` source code lives in a **separate repository**
(`$AUTUMN_UI_DIR`, default `~/Projects/Protei/autumn-ui`). Do not look for
widget source, `node_modules`, or a TS monorepo in this tree.

Two independent deliverables:

- `design-system/` — design-system documentation of the `autumn-ui` UI kit:
  `foundations/` and `components/<widget>.md`. Written as if by designers who
  keep it next to Figma: it describes widgets and the system, not the code.
  Goal: draw or rebuild any widget from the text alone, without the code or
  Figma. Must be readable by mid-tier LLMs (DeepSeek Flash, Qwen) — see
  «How to write docs in `design-system/`» below.
- `design-rules/` — app-level design code of two reference admin apps (A and B),
  built from Figma: `03-page-archetypes/`, `04-patterns/`, numbered files 01–07.

Supporting: `tokens/` (raw export of the alpha "Tiny DS v3", not used by the spec) and `_work/design-system/` (live research
state: the code↔Figma discrepancy log, the token build script, the Figma call
ledger).

## Non-negotiable content rules

- Docs in `design-system/` and `design-rules/` are **in Russian**. Question
  files, prompts and research answers are **in English**.
- Describe **what a user sees and experiences**, never **how it is built**.
  Specs must contain no code, snippets, class/function/variable names, CSS,
  HTML, frameworks, file paths, or screenshots/images.
- **Public kit names are required as-is** — widget, prop/variant and token
  names (`Button`, `variant`, `color.bg.primary`), exactly as in the original.
- Numbers are exact: role (token) name + resolved value per theme, in a table
  row `| Часть | Роль | Light | Dark |`. "Slightly darker" is not acceptable.
- Never guess. Mark unconfirmed facts `UNKNOWN` and record them in
  `_work/design-system/discrepancies.md`.
- **Source of truth is the code**, not Figma. On conflict the spec follows code;
  the conflict is logged in `_work/design-system/discrepancies.md`.

## design-system/

- Entry point and conventions: `design-system/README.md`; change log:
  `design-system/CHANGELOG.md`.
- Keep state in files, not in context — the only live state lives **outside** the
  deliverable catalog, in `_work/design-system/`: `discrepancies.md` (code ↔
  Figma, open items), `build-tokens.py`, `ledger.md` (Figma call log).
- `tokens.json` is **no longer part of the catalog** (removed in 1.3.0): it was
  the export of the **alpha** "Tiny DS v3" (`tokens/`), not the current DS. Do
  **not** run `_work/design-system/build-tokens.py` — it writes
  `design-system/tokens.json` back into the catalog. If it was run, delete that
  file. Colour values live in the «Цвета» tables of the specs and in
  `foundations/colors.md`. Figma is used only for selective verification.
- Open gaps and contradictions found during the 1.3.0 reorganisation are listed
  in `DS-GAPS.md` at the repo root — a task list for filling the docs from code
  and Figma. Follow the instructions at its top.
- Widget inventory and dependency graph: `design-system/components/README.md`.
  Each `components/*.md` ends with a «Критерии соответствия» acceptance checklist.

## How to write docs in `design-system/`

These rules fix the format introduced in 1.3.0. **Do not restructure the
catalog again.** Add and correct facts inside the existing structure. A format
change is allowed only when the user asks for it explicitly.

### Audience and content

- Reader: a designer working next to Figma, a UI developer, a reviewer, and a
  mid-tier LLM. Write so that a model with no other context can answer «what is
  the height of `lg`?» or «what colour is the focus ring in Dark?» from one file.
- Describe only what the user sees and does: parts, properties, sizes, colours,
  states, animation, keys, edge cases.
- Never write: event handlers (`on…`), refs, render props, children/slots as code,
  DOM, classes, CSS, mounting/rendering, server rendering, exceptions, debounce/
  throttle internals, caches, data providers, internal state fields, file paths
  outside the catalog, process notes («сверено с Figma», «перенесено из…»).
  Turn such facts into visible behaviour («список фильтруется через 200 мс после
  ввода») or drop them.
- Technical layers without visuals (`Portal`, `AutumnList`, `ErrorBoundary`,
  the notification service, `polymorphic`, …) get **no spec file** — only a row
  in `components/README.md` → «Технический слой».
- Public names stay exactly as in the kit: widget names, properties that change
  what the user sees (`variant`, `size`, `disabled`, `withTooltip`, …), role
  (token) names, icon names (`ti ti-x`). Code-only props get a plain-language
  name instead.

### File templates

Component file (`components/<name>.md`) — these `##` sections, in this order,
always present; an empty section contains the single line «Нет.»:

1. Title `# <Widget names>`, then a table `| Поле | Значение |` with rows
   «Виджеты в файле», «Класс», «Статус», «Зависит от» (links).
2. `## Назначение` — 2–6 short sentences or a small table.
3. `## Состав` — numbered parts in visual order; say which are optional.
4. `## Свойства` — `| Свойство | Значения | По умолчанию | Что меняется |`.
5. `## Размеры` — rows = metric, columns = `sm` | `m` (по умолчанию) | `lg`.
6. `## Состояния` — `| Состояние | Что видит пользователь |` + priority list.
7. `## Цвета` — `| Часть | Роль | Light | Dark |` (or one table per theme for
   wide matrices). Secondary only as a «справочно» column.
8. `## Поведение` — opening, closing, input, animation (duration + curve).
9. `## Клавиатура и скринридер` — `| Клавиша | Действие |` + what is announced.
10. `## Граничные случаи`.
11. Extra widgets of the same file — one `##` per widget with `###` sub-sections
    from the same list (only those that differ).
12. `## Не определено` — only `UNKNOWN` bullets.
13. `## Критерии соответствия` — `- [ ]` checklist with concrete values.

Foundation file (`foundations/<name>.md`): `## Назначение`, `## Значения`,
`## Правила применения`, `## Связанные разделы`, `## Не определено`.

### Writing rules

- Short declarative sentences, one fact per sentence. No metaphors or slang
  («мебель», «хром», «голова», «приземляется»). Use terms from
  `foundations/glossary.md`; add a new term there before using it.
- Numbers go into tables: one value per cell, every column labelled. Never write
  «13/16/14» or «16→14» in prose. Units always: `px`, `с`, `мс`, `%`.
- Colours: hex in UPPER case (`#5D9AF4`); transparency as `#01070E` 70 %; role
  name in the «Роль» column when known, otherwise `UNKNOWN`.
- Every default is written explicitly in «По умолчанию».
- Each fact lives in one place. Other files link to it with a relative
  Markdown link (`[Tooltip](tooltip.md)`); no bare «см. tooltip».
- `components/README.md` holds only name, one-line purpose, class, file — no
  metrics or colours.
- Never guess. Unknown value → `UNKNOWN` in the table cell and a bullet in
  «Не определено»; record it in `_work/design-system/discrepancies.md`.
- Keep file names and inventory names stable. Moving or renaming anything is a
  CHANGELOG entry (`переименовано/перенесено`).

### Checks before committing

- Every component file has exactly the section list above (compare `##`
  headings across files).
- No implementation words: grep for `рендер|монтир|on[A-Z]|DOM|z-index|
  focus-visible|prefers-|потребител|колбэк` — matches inside role names such as
  `…--focus-visible` are fine.
- No lower-case hex, no broken relative links.

## design-rules/

- Entry point: `design-rules/README.md` (usage order 01 → 07 is listed there);
  change log: `design-rules/CHANGELOG.md`.
- Describes **usage only** (where and how widgets compose), not widget internals
  — internals belong to `design-system/`.
- `reference/` holds illustrative screen samples: a textual breakdown
  (`reference/*/screen.md`) plus the raw code captured from Figma
  (`reference/*/context.tsx`). This is a **deliberate, one-off exception** to the
  "no code" rule for the catalogs, limited to `reference/` only; it is
  illustrative, never normative.
- Final docs must not contain process or reasoning.
- **Figma budget is hard**: ≤ 50 MCP requests per revision cycle (absolute cap
  60), ≤ 8/min, read-only, no images/screenshots. Log every call in
  `_work/design-system/ledger.md` before continuing. The agent calls the Figma
  MCP directly (`ftk-figma_*`).

## Researching `autumn-ui` and Figma

- The `autumn-ui` sources are read **directly by the agent** — open files in
  `$AUTUMN_UI_DIR` (default `~/Projects/Protei/autumn-ui`) or search them with
  `ai-grepa` (project `autumn-ui`). There is no intermediary harness; findings go
  straight into the specs.
- Open items and code↔Figma conflicts land in
  `_work/design-system/discrepancies.md`.
- Figma is read **directly** through the Figma MCP (`ftk-figma_*`), subject to
  the budget rule above; every call is logged in `_work/design-system/ledger.md`.

## Agent setup and git

- `.opencode/` is **generated/synced** from the plugin
  `@protei-autumn-dev/ai-opencode-ftk` (see `.opencode/.ftk-sync`). Do not
  hand-edit files there — they are overwritten on sync.
- Single long-lived branch: `develop` (no `master`, no CI). Commit message
  format: `<branch> - <short English text>`, e.g.
  `develop - add button specification`.
- Internal, non-consumer material lives in `_work/design-system/` at the repo
  root and is versioned. Only live state is kept: `discrepancies.md`,
  `build-tokens.py`, `ledger.md`. Only transient artifacts are ignored
  (`__pycache__`).

## What may live in the two catalogs

`design-system/` and `design-rules/` are handed to the consuming team as-is (the
two directories side by side, read-only). They must contain **only
consumer-facing normative content**: the specs themselves, plus each catalog's
`README.md` and `CHANGELOG.md`. Anything else — progress, open questions, source
references, code↔Figma discrepancies, helper scripts, logs — belongs in
`_work/design-system/` and must not be referenced from inside the catalogs. The
consumer has no git, Figma, or the rest of the repo: knowledge of what changed
comes only from the `CHANGELOG.md`, and inventory names must stay stable so a
built widget can be traced back.

## Versioning and journals

The two deliverable catalogs (`design-system/`, `design-rules/`) share **one
version number**, written as the first line of each `README.md`:

```
Версия: <number>
```

The number must be identical in both files. There are no git tags in this repo,
so the scheme starts at `1.0.0`.

Any change to the normative specs goes in **one commit** together with:

- the bumped version in **both** `README.md` files;
- a new entry in **both** `design-system/CHANGELOG.md` and
  `design-rules/CHANGELOG.md` (newest first). If a catalog changed nothing in
  that version, its entry must still say «без изменений», so that "not changed"
  is distinguishable from "forgot to log".
- a journal entry that lists changes **by part**, using the names from the
  README inventory, each tagged: `добавлено`, `изменено` ("было → стало", with
  concrete values or behaviour so a developer can fix an already-built widget
  without re-reading the spec), `удалено`, `переименовано/перенесено` (with old
  and new name/location), or `правка текста` (no meaning change; nothing to
  rework). **Restructuring — moving or renaming a part — is also a journal
  entry.**

Working materials (progress, open questions, source discrepancies, source
references, helper scripts) are kept **outside** `design-system/` and
`design-rules/`, in `_work/design-system/` at the repository root. The specs
must contain no references that lead outside these two catalogs.
