---
title: Цвета группы кнопок ButtonGroup
summary: Цвета ButtonGroup в Light и Dark для видов btn-group, btn-group-box, tab-underline, tab-bookmark и стрелок прокрутки.
read_when:
  - нужен точный цвет сегмента или вкладки в покое, hover, нажатии или выборе
  - нужен цвет вкладок или группы кнопок в тёмной теме
keywords: [ButtonGroup, tab-underline, tab-bookmark, btn-group-box, вкладки, сегменты, цвет вкладки]
related: [./button-group.md, ../foundations/colors.md, ../foundations/themes.md]
---
| Поле | Значение |
|---|---|
| Виджеты в файле | `ButtonGroup` |
| Раздел спецификации | «Цвета»; остальные разделы — в [ButtonGroup](button-group.md) |

## Общее

Контур фокуса: Light `#BED6FB`, Dark `#5D9AF4` — роли
`btn-group-btn-outline-color--focus-visible`,
`btn-group-box-btn-outline-color--focus-visible`,
`tab-group-bookmark-btn-outline-color--focus-visible`. У `tab-underline` роль
`tab-group-underline-btn-outline-color--focus-visible`: Light `#BED6FB`, Dark
`#6DA4F5`.

## `btn-group`

Каждый элемент всегда держит прозрачную рамку 1 px, чтобы размер не менялся при
подсветке.

| Часть | Роль | Light | Dark |
|---|---|---|---|
| Фон: покой | `btn-group-btn-background-color` | прозрачный | прозрачный |
| Текст: покой | `btn-group-btn-text-color` | `#79818B` | `#9298A0` |
| Счётчик: фон: покой | `btn-group-btn-counter-background-color` | `#DEE0E3` | `#2A384F` |
| Счётчик: текст: покой | `btn-group-btn-counter-text-color` | `#141F2F` | `#FFFFFF` |
| Фон: hover | `btn-group-btn-background-color--hover` | `#ECEDEF` | `#212E41` |
| Текст: hover | `btn-group-btn-text-color--hover` | `#5F6772` | `#C5C9CD` |
| Счётчик: фон: hover | `btn-group-btn-counter-background-color--hover` | `#C5C9CD` | `#32435F` |
| Счётчик: текст: hover | `btn-group-btn-counter-text-color` (как в покое) | `#141F2F` | `#FFFFFF` |
| Фон: нажато | `btn-group-btn-background-color--active` | `#DEE0E3` | `#263348` |
| Текст: нажато | `btn-group-btn-text-color--active` | `#141F2F` | `#FFFFFF` |
| Счётчик: фон: нажато | `btn-group-btn-counter-background-color--active` | `#C5C9CD` | `#32435F` |
| Счётчик: текст: нажато | `btn-group-btn-counter-text-color--active` | `#141F2F` | `#FFFFFF` |
| Фон: выбрано | `btn-group-btn-check-background-color--checked` | `#DEE0E3` | `#2A384F` |
| Текст: выбрано | `btn-group-btn-check-text-color--checked` | `#141F2F` | `#FFFFFF` |
| Счётчик: фон: выбрано | `btn-group-btn-check-btn-counter-background-color` | `#FFFFFF` | `#FFFFFF` |
| Счётчик: текст: выбрано | `btn-group-btn-check-btn-counter-text-color` | `#141F2F` | `#2A384F` |
| Фокус: фон и текст | как в покое | как в покое | как в покое |
| Disabled: все цвета | как в покое | как в покое | как в покое |

## `btn-group-box`

Элементы в покое прозрачные. Фон и рамка элемента всегда одного цвета.

| Часть | Роль | Light | Dark |
|---|---|---|---|
| Коробка: фон | `btn-group-box-background-color` | `#ECEDEF` | `#1C283A` |
| Элемент: фон: покой | `btn-group-box-btn-background-color` | прозрачный | прозрачный |
| Элемент: текст: покой | `btn-group-box-btn-text-color` | `#5F6772` | `#9298A0` |
| Элемент: фон: hover | `btn-group-box-btn-background-color--hover` | `#DEE0E3` | `#263348` |
| Элемент: текст: hover | `btn-group-box-btn-text-color--hover` | `#46505D` | `#B0B4BA` |
| Элемент: фон: нажато | `btn-group-box-btn-background-color--active` | `#C5C9CD` | `#28364C` |
| Элемент: текст: нажато | `btn-group-box-btn-text-color--active` | `#141F2F` | `#FFFFFF` |
| Элемент: фон: выбрано | `btn-group-box-btn-check-background-color--checked` | `#FFFFFF` | `#2A384F` |
| Элемент: текст: выбрано | `btn-group-box-btn-check-text-color--checked` | `#141F2F` | `#FFFFFF` |

| Счётчик | Роль | Light | Dark |
|---|---|---|---|
| Фон: покой | `btn-group-box-btn-counter-background-color` | `#C5C9CD` | `#3A4E6E` |
| Текст: покой | `btn-group-box-btn-counter-text-color` | `#141F2F` | `#FFFFFF` |
| Фон: hover | `btn-group-box-btn-counter-background-color--hover` | `#FFFFFF` | `#435A7F` |
| Текст: hover | `btn-group-box-btn-counter-text-color` (как в покое) | `#141F2F` | `#FFFFFF` |
| Фон: выбрано | `btn-group-box-btn-check-btn-counter-background-color` | `#DEE0E3` | `#FFFFFF` |
| Текст: выбрано | `btn-group-box-btn-check-btn-counter-text-color` | `#141F2F` | `#2A384F` |

## `tab-underline`

Заливки нет, фонового тинта нет.

| Часть | Роль | Light | Dark |
|---|---|---|---|
| Линия-дорожка | `tab-group-underline-border-color` | `#ECEDEF` | `#2A384F` |
| Текст: покой | `tab-group-underline-btn-text-color` | `#79818B` | `#9298A0` |
| Текст: hover и нажато | `tab-group-underline-btn-text-color--hover` | `#141F2F` | `#FFFFFF` |
| Текст: выбрано | `tab-group-underline-btn-check-text-color--checked` | `#5D9AF4` | `#6DA4F5` |
| Полоса выбранной вкладки | `tab-group-underline-btn-check-border-color--checked` | `#5D9AF4` | `#6DA4F5` |
| Счётчик: фон: покой | `tab-group-underline-btn-counter-background-color` | `#79818B` | `#9298A0` |
| Счётчик: фон: hover | `tab-group-underline-btn-counter-background-color--hover` | `#141F2F` | `#FFFFFF` |
| Счётчик: фон: выбрано | `tab-group-underline-btn-check-btn-counter-background-color` | `#5D9AF4` | `#6DA4F5` |
| Счётчик: текст | `tab-group-underline-btn-counter-text-color` | `#FFFFFF` | `#142130` |

## `tab-bookmark`

| Часть | Роль | Light | Dark | Dark Secondary (справочно) |
|---|---|---|---|---|
| Основание: фон | `tab-group-bookmark-background-color` | `#DEE0E3` | `#212E41` | — |
| Вкладка: фон: покой | `tab-group-bookmark-btn-background-color` | прозрачный | прозрачный | — |
| Вкладка: текст: покой | `tab-group-bookmark-btn-text-color` | `#5F6772` | `#9298A0` | — |
| Вкладка: фон: hover | `tab-group-bookmark-btn-background-color--hover` | `#C5C9CD` | `#28364C` | — |
| Вкладка: текст: hover | `tab-group-bookmark-btn-text-color--hover` | `#141F2F` | `#C5C9CD` | — |
| Вкладка: фон: нажато | `tab-group-bookmark-btn-background-color--active` | `#B0B4BA` | `#28364C` | — |
| Вкладка: текст: нажато | `tab-group-bookmark-btn-text-color--active` | `#141F2F` | `#FFFFFF` | — |
| Вкладка: фон: выбрано | `tab-group-bookmark-btn-check-background-color--checked` | `#FFFFFF` (также в Light Secondary) | `#2A384F` | `#3A4E6E` |
| Вкладка: текст: выбрано | `tab-group-bookmark-btn-check-text-color--checked` | `#141F2F` | `#FFFFFF` | — |
| «Ушко» | `tab-group-bookmark-btn-before-after-check-content-color` | `#FFFFFF` | `#2A384F` | `#3A4E6E` |

| Счётчик | Роль | Light | Dark |
|---|---|---|---|
| Фон: покой | `tab-group-bookmark-btn-counter-background-color` | `#C5C9CD` | `#3A4E6E` |
| Текст: покой | `tab-group-bookmark-btn-counter-text-color` | `#141F2F` | `#FFFFFF` |
| Фон: hover | `tab-group-bookmark-btn-counter-background-color--hover` | `#FFFFFF` | `#435A7F` |
| Текст: hover | `tab-group-bookmark-btn-counter-text-color` (как в покое) | `#141F2F` | `#FFFFFF` |
| Фон: выбрано | `tab-group-bookmark-btn-check-btn-counter-background-color` | `#DEE0E3` | `#FFFFFF` |
| Текст: выбрано | `tab-group-bookmark-btn-check-btn-counter-text-color` | `#141F2F` | `#2A384F` |

## Стрелки прокрутки

Шеврон `#5D9AF4` в обеих темах (роль `btn-group-scroll-button-text-color`). Под
шевроном — градиент-затухание от цвета подложки: непрозрачный → непрозрачность
0,90 на 81 % ширины → 0,06 у края.

| Вид | Роль | Подложка Light | Подложка Dark |
|---|---|---|---|
| `btn-group` | `btn-group-scroll-button-background-color` | `#FFFFFF` | `#142130` |
| `btn-group-box` | `btn-group-box-scroll-button-background-color` | `#ECEDEF` | `#142130` |
| `tab-bookmark` | `tab-group-bookmark-scroll-button-background-color` | `#DEE0E3` | `#212E41` |

## Не определено

Нет.

## Критерии соответствия

- [ ] Цвета элементов, счётчиков, оснований и стрелок совпадают с таблицами этого файла.
- [ ] Контур фокуса во всех видах: Light `#BED6FB`, Dark `#5D9AF4`.
