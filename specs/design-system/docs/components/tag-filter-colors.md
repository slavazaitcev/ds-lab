---
title: Цвета панели фильтров TagFilter
summary: Цвета TagFilter в Light и Dark — панель, чипы условий на инвертированном фоне, кнопки-иконки, крестик чипа.
read_when:
  - нужен точный цвет панели фильтров или чипа условия
  - нужен цвет панели фильтров в тёмной теме
keywords: [TagFilter, фильтры, чип условия, плейсхолдер]
related: [./tag-filter.md, ./tag-colors.md, ../foundations/colors.md, ../foundations/themes.md]
---
| Поле | Значение |
|---|---|
| Виджеты в файле | `TagFilter` |
| Раздел спецификации | «Цвета»; остальные разделы — в [TagFilter](tag-filter.md) |

## Общее

Колонки Secondary — справочные, см. [Темы](../foundations/themes.md).

## Панель

| Часть | Роль | Light | Light Secondary | Dark | Dark Secondary |
|---|---|---|---|---|---|
| Фон в покое | `tag-filter-background-color` | `#ECEDEF` | `#FFFFFF` | `#1E2B3E` | `#2A384F` |
| Рамка в покое | `tag-filter-border-color` | `#ECEDEF` | `#FFFFFF` | `#1E2B3E` | `#2A384F` |
| Рамка в фокусе | `tag-filter-border-color--focus` | `#5D9AF4` | `#5D9AF4` | `#5D9AF4` | `#5D9AF4` |
| Текст | `tag-filter-text-color` | `#141F2F` | `#141F2F` | `#FFFFFF` | `#FFFFFF` |
| Плейсхолдер | `tag-filter-input--placeholder-text-color` | `#79818B` | `#79818B` | `#79818B` | `#9298A0` |
| Плейсхолдер в фокусе | `tag-filter-input--placeholder-text-color--focus` | `#B0B4BA` | `#B0B4BA` | `#5F6772` | `#5F6772` |
| Разделитель | `tag-filter-divider-border-color` | `#DEE0E3` | `#DEE0E3` | `#2A384F` | `#32435F` |

## Чип (инвертированный фон)

Рамка в покое и при hover равна фону.

| Часть | Роль | Light | Light Secondary | Dark | Dark Secondary |
|---|---|---|---|---|---|
| Фон в покое | `tag-element-background-color-invert` | `#FFFFFF` | `#ECEDEF` | `#32435F` | `#3A4E6E` |
| Фон при hover | `tag-element-background-color--hover-invert` | `#DEE0E3` | `#DEE0E3` | `#32435F` | `#32435F` |
| «Выбран»: фон | `tag-element-active-background-color-invert` | `#EFF5FE` | `#EFF5FE` | `#32435F` | `#3A4E6E` |
| «Выбран» + hover: фон | `tag-element-active-background-color--hover-invert` | `#DFEBFD` | `#DFEBFD` | `#3A4E6E` | `#435A7F` |
| «Выбран» и правка: рамка | `tag-element-editing-border-color` | `#5D9AF4` | `#5D9AF4` | `#5D9AF4` | `#5D9AF4` |
| Контур фокуса | `tag-element-outline-color--focus-visible` | `#BED6FB` | `#BED6FB` | `#2C4162` | `#2C4162` |
| Счётчик: фон | `tag-element-counter-background-color-invert` | `#DEE0E3` | `#FFFFFF` | `#435A7F` | `#2A384F` |
| Текст | `tag-element-text-color` | `#141F2F` | `#141F2F` | `#FFFFFF` | `#FFFFFF` |
| Тень | `tag-element-box-shadow-color-invert` | нет | нет | смещение по Y 2 px, размытие 8 px, чёрный 30 % | смещение по Y 2 px, размытие 8 px, чёрный 30 % |

## Кнопки-иконки

Относится к «плюсу», своим кнопкам, «очистить всё», «применить» и шевронам.

| Состояние | Роль | Light | Light Secondary | Dark | Dark Secondary |
|---|---|---|---|---|---|
| Покой | `tag-filter-icon-button-color` | `#79818B` | `#79818B` | `#79818B` | `#79818B` |
| Hover | `tag-filter-icon-button-color--hover` | `#141F2F` | `#141F2F` | `#FFFFFF` | `#FFFFFF` |
| Нажато | `tag-filter-icon-button-color--active` | `#5D9AF4` | `#5D9AF4` | `#6DA4F5` | `#6DA4F5` |
| Контур фокуса | `tag-filter-icon-button-outline-color--focus-visible` | `#BED6FB` | `#BED6FB` | `#6DA4F5` | `#6DA4F5` |

## Крестик чипа

| Состояние | Роль | Light | Dark |
|---|---|---|---|
| Покой | `tag-element-text-color` | цвет текста чипа | цвет текста чипа |
| Hover | `tag-element-delete-icon-text-color--hover` | `#46505D` | `#DEE0E3` |
| Нажато | `tag-element-delete-icon-text-color--active` | `#141F2F` | `#FFFFFF` |
| Контур фокуса | `tag-element-delete-icon-outline-color--focus-visible` | `#BED6FB` | `#6DA4F5` |

Контур крестика: 2 px, радиус 4 px, наружу на 3 px.

## Не определено

Нет.

## Критерии соответствия

- [ ] Значения совпадают с таблицами этого файла.
