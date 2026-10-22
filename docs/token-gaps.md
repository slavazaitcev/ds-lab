# Пробелы в токенах

Сюда записываем всё, чего не хватило при сборке компонентов и экранов: нет токена для состояния, не сходятся отступы, непонятно, какой токен брать. Это список вопросов к системе в Figma.

| Дата | Где | Чего не хватает | Что взяли пока |
| --- | --- | --- | --- |
| 2026-10-19 | Button | Нет токена для цвета и ширины фокусной рамки | Цвет закрыт 2026-10-20: в Figma `color.border.{brand,danger,warning,success}.soft(er)`. Ширина 4px задана в Figma числом, переменной нет: `--focus-ring-width` в pending-tokens |
| 2026-10-19 | Button | Неизвестно, какой токен фона у primary в Figma: `bg.brand.default` (blue/100) или `bg.brand.bold.default` (blue/120) | Закрыт 2026-10-20: в Figma `bg.brand.default/hover/active`, кнопка переведена на него |
| 2026-10-19 | Токены | `color.bg.accent.purple.*` и `color.border.accent.purple.*` ссылаются на зелёные примитивы, фиолетовых тёмных примитивов нет | Берём как есть |
| 2026-10-19 | Токены | `color.bg.info.default` задан прямо цветом с прозрачностью 0.1, а не ссылкой на примитив | Берём как есть |
| 2026-10-20 | Button | Отступы (16/8, gap 8, padding 4 у text в фокусе), высота 36, скругления 8 и 4, рамка outline 1px и кольцо фокуса 4px заданы в Figma числами, без переменных | Значения из Figma в `pending-tokens.css` |
| 2026-10-20 | Button | В Figma есть только `size=medium`. Для small и large нет данных | `s` и `l` оставлены на старых предположениях (28/44px, шрифт 12/16 и 16/24) |
| 2026-10-20 | Button | Текст у secondary и light в покое `#1770e2` без переменной. По цвету это `blue/110` (= `bg.brand.hover`), текстового токена с таким цветом нет. В hover и pressed стоит `text.brand.default` | `color.text.brand.default`, `TODO(token)` в `Button.css` |
| 2026-10-20 | Button | У primary warning текст тёмный (`text.warning.default`), а иконка белая (`icon.constant-white`). Похоже на ошибку в макете, белое на жёлтом плохо читается | Как в Figma |
| 2026-10-20 | Button | В disabled-счётчике `bg.neutral.bolder.default` = `#b5b9bf` (непрозрачный), в остальных местах та же переменная = `rgb(26 39 54 / 0.39)`. Похоже на подмену переменной из другой библиотеки | Счётчик в коде не сделан, на кнопку не влияет |
| 2026-10-20 | Button | Hover/pressed для primary warning/success и outline/text warning/success, а также цвет фокуса text success сняты не с каждого узла, а выведены по схеме danger | `bg.{x}.bold.hover/active`, `bg.{x}.hover/active`, `text.{x}.hover/active`, `border.{x}.soft` |
| 2026-10-20 | Button | Шрифт Roboto в проект не подключён | `--font-family-base` начинается с Roboto, дальше системные запасные |
| 2026-10-20 | Button | Размер лоадера 24px и толщина его линии не оформлены переменными | `--loader-size-m: 24px` (Figma), толщина `--border-width-s` 2px (предположение) |
| 2026-10-20 | Icons / Button | В узле кнопки (4390:88995) иконки только размера 20px (переменная `m`). Для кнопок `s` и `l` размер иконки в Figma не задан | `--icon-size-m` для всех размеров кнопки, `TODO(token)` в `Button.tsx` |
| 2026-10-20 | Icons | Размеры 16 и 24px (`--icon-size-s`, `--icon-size-l`) и толщины линий 1.3/1.5/1.5 заданы Славой, в Figma-узле кнопки их нет и переменными они не оформлены | `pending-tokens.css` и `src/icons/spec.ts` |
| 2026-10-20 | Button | У primary в default/hover/pressed в узле две иконочные переменные: `icon.constant-white` и `icon.inverse`; у outline (brand) — `icon.brand.default` и `icon.accent.blue`. По списку переменных не видно, какая из них на иконке, а какая на стрелке или счётчике | `icon.constant-white` у primary и `icon.brand.default` у outline: только они встречаются во всех состояниях варианта |
| 2026-10-20 | Button | Стрелка `toggle-arrow` (8×4) в Figma нарисована вектором, а не иконкой из набора. В Tabler ей нет пары | Не переносили |
| 2026-10-20 | Button | У outline success в disabled (4390:89431) нет `opacity/disabled`, у остальных disabled есть | В коде прозрачность у всех disabled одинаковая |
| 2026-10-21 | FormLabel | Иконка info в размерах xxs/xs: в Figma 14px, у нас нет `--icon-size-xxs` и нет размера s (16px) у Icon — используем `size="s"` (16px) | `--icon-size-s` (16px), `TODO(token)` в FormLabel.tsx |
| 2026-10-21 | FormLabel | Иконка info в размерах l/xl: в Figma 18px wrapper с SVG 20px, у нас нет `--icon-size-s+` — используем `size="m"` (20px) | `--icon-size-m` (20px) |
| 2026-10-21 | FormLabel | Нижний отступ компонента в Figma: 4px (xxs/xs), 6px (s/m/l), 8px (xl) — это скорее gap между label и полем. В коде не переносили, управляется родителем (Input) | — |
| 2026-10-21 | FormLabel | Размеры xxs, xs, s, l, xl в Figma не используются в input--light-primary (только m) | Реализованы все, пригодятся при переносе других контролов |
| 2026-10-21 | ButtonIcon | Counter radius 13px из Figma, не кратно 4, переменной в Figma нет | `--radius-counter: 13px` в pending-tokens.css |
| 2026-10-21 | ButtonIcon | **Расхождение с другими компонентами**: в btn-icon фон счётчика и цвет стрелки намеренно ссылаются на `--btnicon-fg` (тот же цвет, что иконка кнопки). В обычной Button счётчик имеет отдельный bg-токен (`--color-bg-neutral-bolder-default` в disabled, цветной bg-токен в primary и т. д.). В btn-icon всё выровнено в один цвет по решению Славы (2026-10-21). | Реализовано через единственную переменную `--btnicon-fg`; counter и arrow используют её напрямую |
| 2026-10-21 | ButtonIcon | toggle-arrow (8×4px) — кастомный SVG-вектор, в Tabler аналога нет | Inline SVG в ButtonIcon.tsx; используется `var(--btnicon-fg)` как stroke |
| 2026-10-21 | ButtonIcon | В Figma только size=medium | Реализован только `size="m"`, s и l не делаем |
| 2026-10-21 | Tooltip | Тени `tooltip-light` и `Light Shadow` используют цвет `#141F2F`, отличный от `--color-shadow-default` (`#383b3f`). Слава поправит в Figma, пока привязали к `--color-shadow-default` через `color-mix`. | `--tooltip-filter-shadow` в pending-tokens.css, TODO(token) |
| 2026-10-21 | Tooltip | Нет токена `line-height` 18px для description-текста тултипа | `--line-height-xs-body: 18px` в pending-tokens.css |
| 2026-10-21 | Tooltip | Нет токена для max-width тултипа с description (348px из Figma) | `--tooltip-max-width: 348px` в pending-tokens.css |
| 2026-10-21 | Input | Нет токена для hover-состояния рамки инпута. Когда появится в Figma, назвать `color.border.input.hover` | Пока `--color-border-bolder` |
