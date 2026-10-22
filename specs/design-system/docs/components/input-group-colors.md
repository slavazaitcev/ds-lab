---
title: Цвета составной полосы InputGroup
summary: Цвета InputGroup в Light и Dark — фон и рамки участников, текстовые ячейки, рамка на стыке, валидация.
read_when:
  - нужен точный цвет рамки или фона составной полосы
  - нужен цвет полосы при ошибке, предупреждении или успехе
keywords: [InputGroup, составное поле, префикс, суффикс, цвет рамки]
related: [./input-group.md, ./input.md, ../foundations/colors.md, ../foundations/themes.md]
---
| Поле | Значение |
|---|---|
| Виджеты в файле | `InputGroup` |
| Раздел спецификации | «Цвета»; остальные разделы — в [InputGroup](input-group.md) |

## Основные

| Часть | Роль | Light | Dark |
|---|---|---|---|
| Внешняя рамка | `input-group-border-color` | `#ECEDEF` (gray 10) | `#1E2B3E` (blue-gray 50) |
| Внутренний разделитель | `input-group-border-color-inner` | `#DEE0E3` (gray 20) | `#2A384F` (blue-gray 100) |
| Рамка в фокусе | `input-group-border-color--focus` | `#5D9AF4` | `#5D9AF4` |
| Фон текстовой и иконочной ячейки | `input-group-text-background-color` | `#ECEDEF` | `#1E2B3E` |
| Текст ячейки | `input-group-text-text-color` | `#46505D` (gray 80) | `#B0B4BA` (gray 40) |
| Чекбокс и radio в ячейке, не отмечен: фон | `input-group-text-form-check-input-background-color` | `#FFFFFF` | `#1E2B3E` |
| Чекбокс в ячейке, hover: фон | `input-group-text-form-check-input-background-color--hover` | `#EFF5FE` | `#233045` (blue-gray 70) |
| Чекбокс и radio, отмечен | `input-group-text-form-check-input-background-color--checked` | `#5D9AF4`, галочка белая | `#5D9AF4`, галочка белая |
| Radio, отмечен: середина | `input-group-text-form-check-input-radio-background-color--checked` | `#FFFFFF` | `#1E2B3E` |
| Текстовая и иконочная кнопка: фон | `input-group-btn-text-background-color` | `#ECEDEF` | `#1E2B3E` |
| Кнопка-контур до hover: фон | `input-group-btn-outline-background-color` | `#FFFFFF` | `#1E2B3E` |
| Стрелки: фон | `input-group-value-controls-btn-background-color` | `#ECEDEF` | `#1E2B3E` |
| Стрелки: иконка | `input-group-value-controls-btn-text-color` | `#79818B` | `#79818B` |
| Стрелки: фон при hover | `input-group-value-controls-btn-background-color--hover` | `#DEE0E3` | `#233045` |
| Стрелки: фон при нажатии | `input-group-value-controls-btn-background-color--active` | `#C5C9CD` | `#2A384F` |
| Стрелки: контур фокуса | `btn-icon-outline-color--focus-visible` | `#BED6FB` | `#6DA4F5` |
| Стрелки disabled: иконка | `btn-icon-text-color` | `#79818B` с непрозрачностью 60 % | `#79818B` с непрозрачностью 60 % |

## Валидация

Окрашивает рамку, фон ячеек, стрелки, текстовые и иконочные кнопки.

| Часть | Роль | Valid Light | Valid Dark | Invalid Light | Invalid Dark | Warning Light | Warning Dark |
|---|---|---|---|---|---|---|---|
| Рамка | `input-group-is-valid-border-color` / `input-group-is-invalid-border-color` / `input-group-is-warning-border-color` | `#27AE60` | `#27AE60` | `#E61E43` | `#E83556` | `#F1B704` | `#F1B704` |
| Фон | `input-group-is-valid-background-color` / `input-group-is-invalid-background-color` / `input-group-is-warning-background-color` | `#E9F7EF` | `#223A45` | `#FCE9EC` | `#352E44` | `#FFF5D6` | `#363B3B` |
| Стрелки: hover | `input-group-is-valid-value-controls-btn-background-color--hover` / `input-group-is-invalid-value-controls-btn-background-color--hover` / `input-group-is-warning-value-controls-btn-background-color--hover` | `#D4EFDF` | `#224847` | `#FAD2D9` | `#483045` | `#FDEEBE` | `#4A4A35` |
| Стрелки: нажатие | `input-group-is-valid-value-controls-btn-background-color--active` / `input-group-is-invalid-value-controls-btn-background-color--active` / `input-group-is-warning-value-controls-btn-background-color--active` | `#BEE7CF` | `#23544B` | `#F8BCC7` | `#5D3048` | `#FEEAAA` | `#5F572F` |
| Стрелки disabled: фон | `input-group-is-valid-value-controls-btn-background-color--disabled` / `input-group-is-invalid-value-controls-btn-background-color--disabled` / `input-group-is-warning-value-controls-btn-background-color--disabled` | `#E9F7EF` 60 % | `#223A45` 60 % | `#FCE9EC` 60 % | `#352E44` 60 % | `#FFF5D6` 60 % | `#363B3B` 60 % |
| Стрелки: контур фокуса | `input-group-is-valid-value-controls-btn-outline-color--focus-visible` / `input-group-is-invalid-value-controls-btn-outline-color--focus-visible` / `input-group-is-warning-value-controls-btn-outline-color--focus-visible` | `#A9DFBF` | `#23544B` | `#F5A5B4` | `#5D3048` | `#FEE495` | `#746529` |

Кнопки-заливки цветами валидации не окрашиваются.

## Не определено

Нет.

## Критерии соответствия

- [ ] Значения совпадают с таблицами этого файла.
