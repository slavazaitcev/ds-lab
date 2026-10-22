# Волны, порядок, оценки

Порядок по зависимостям: примитивы → композиты/выбор → оверлеи →
отображение/инфраструктура. «Глубина» — строк на 2026-10-15. «Оценка»: S ≈ 0,5
дня, M ≈ 1 день, L ≈ 1,5 дня. Итог: 7 S + 18 M + 5 L ≈ **30 человеко-дней**.

## Волна 1 — примитивы и база (10)

| # | Файл | Виджеты | Глубина | Оценка | Зависит от |
|---|---|---|---|---|---|
| 1 | text-icon.md | Text, Icon | 51 | S | typography |
| 2 | button.md | Button, ArrowsButton, ButtonFile | 229 | M | text-icon |
| 3 | button-group.md | ButtonGroup | 171 | M | button |
| 4 | checkbox.md | Checkbox (checkbox/radio/switch) | 189 | M | form |
| 5 | input.md | InputText, InputTextArea, InputNumber, InputMoney | 199 | L | text-icon, form |
| 6 | form.md | Label, Feedback, HelperText, InfoIcon, FormWidgetGroup | 155 | M | text-icon |
| 7 | tag.md | Tag, TagList | 137 | M | button, input |
| 8 | avatar.md | Avatar | 79 | S | themes |
| 9 | loader.md | Loader | 71 | S | colors |
| 10 | callout.md | Callout, CalloutTitle/Text/Divider | 68 | S | text-icon |

## Волна 2 — выбор и композиты (8)

| # | Файл | Виджеты | Глубина | Оценка | Зависит от |
|---|---|---|---|---|---|
| 11 | input-group.md | InputGroup | 125 | M | input, checkbox, tag-input, selector, button |
| 12 | selector.md | Selector + грани + панель | 175 | L | popover, input, tag |
| 13 | input-date-file.md | InputDate, InputFile | 143 | M | input, calendar |
| 14 | tag-input.md | TagInput | 181 | M | tag |
| 15 | tag-filter.md | TagFilter | 150 | L | tag, input, calendar, selector |
| 16 | autocomplete.md | Autocomplete, MaybeAutocomplete | 136 | M | popover, loader |
| 17 | calendar.md | Calendar, InputDateWithCalendar | 215 | M | popover, button, input |
| 18 | list.md | AutumnList, AutumnListSpacer | 63 | M | — (движок) |

## Волна 3 — оверлеи (8)

| # | Файл | Виджеты | Глубина | Оценка | Зависит от |
|---|---|---|---|---|---|
| 19 | portal.md | Portal, MaybePortal, PortalContainer | 46 | S | — |
| 20 | popover.md | Popover, MaybePopover, PopoverBoundary, FloatingArrow | 83 | M | portal |
| 21 | tooltip.md | Tooltip, MaybeTooltip | 78 | M | popover |
| 22 | menu.md | Menu, MenuHeader/Item/Footer/Divider/CustomSubmenu | 83 | L | popover, checkbox, text-icon |
| 23 | modal.md | Modal, MaybeModal | 72 | M | portal |
| 24 | offcanvas.md | Offcanvas + части | 77 | M | portal |
| 25 | notifications.md | служба, карточка, док, центр | 63 | M | portal, button |
| 26 | table-pager.md | TablePager | 46 | S | button |

## Волна 4 — отображение и прочее (4)

| # | Файл | Виджеты | Глубина | Оценка | Зависит от |
|---|---|---|---|---|---|
| 27 | lightbox.md | Lightbox | 49 | L | portal |
| 28 | image-editor.md | ImageEditorView | 37 | M | loader |
| 29 | video.md | VideoPlayerView | 49 | M | loader |
| 30 | bsod.md | BSOD, ErrorBoundary | 34 | S | button |

## Волна 5 — финал (координатор)

- Пройти «Критерии соответствия» всех 30 файлов на консистентность.
- Свести правки `foundations/` (сайд-активность сессий), разрешить спорное.
- Обновить «Не определено» в components/README.md: снять закрытое, перенести
  остаток в discrepancies.
- Журнал по частям (имена — из описи README, теги `добавлено`/`изменено`/«было →
  стало»/`правка текста`).
- Версия в обоих README (design-system и design-rules, одинаково), записи в обоих
  CHANGELOG (design-rules — «без изменений», если его каталог не менялся).
- Финальный коммит: `<ветка> - bump version to <ver> and log detailing changes`.
  Пуш — по команде; MR в develop открывает пользователь.

## Известные UNKNOWN на старте (семена для брифов; сессия начинает с секции
«Не определено» своего файла и снимает полную дельту по coverage-checklist)

- menu.md: размер по умолчанию, метрики/цвета состояний по ступеням и темам.
- calendar.md: высота/бордер боксов времени, точный кейстеп-маппинг, базовые
  непрозрачности, щель ячеек.
- offcanvas.md: (3 секции UNKNOWN — снять файлом).
- modal.md, portal.md, table-pager.md: (2 секции каждая).
- popover.md: вид поверхности по умолчанию, кривая авто-подбора сторон.
- Прочие — по секциям «Не определено» файлов (по 1 в каждом).
