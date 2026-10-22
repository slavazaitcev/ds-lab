---
title: Цвета поля тегов TagInput
summary: Цвета TagInput в Light и Dark — поле по состояниям и валидации, инвертированные чипы, крестик «очистить всё», индикатор.
read_when:
  - нужен точный цвет рамки, фона или чипов поля тегов
  - нужен цвет поля тегов в тёмной теме или при валидации
keywords: [TagInput, поле тегов, чипы, цвет рамки, валидация]
related: [./tag-input.md, ./tag-colors.md, ../foundations/colors.md, ../foundations/themes.md]
---
| Поле | Значение |
|---|---|
| Виджеты в файле | `TagInput` |
| Раздел спецификации | «Цвета»; остальные разделы — в [TagInput](tag-input.md) |

## Общее

Колонка «Dark, приподнятая поверхность» — справочная, см. [Темы](../foundations/themes.md).

## Поле

| Часть | Роль | Light | Dark | Dark, приподнятая поверхность |
|---|---|---|---|---|
| Фон и рамка в покое | `tags-input-background-color` | `#ECEDEF` | `#1E2B3E` | `#2A384F` |
| Текст | `tags-input-text-color` | `#141F2F` | `#FFFFFF` | `#FFFFFF` |
| Плейсхолдер | `tags-input-input--placeholder-text-color` | `#79818B` | `#79818B` | `#9298A0` |
| Плейсхолдер в фокусе | `tags-input-input--placeholder-text-color--focus` | `#B0B4BA` | `#5F6772` | `#5F6772` |
| Рамка в фокусе | `tags-input-border-color--focus` | `#5D9AF4` | `#5D9AF4` | `#5D9AF4` |
| Valid: фон | `tags-input-is-valid-background-color` | `#E9F7EF` | `#223A45` | `#223A45` |
| Valid: рамка | `tags-input-is-valid-border-color` | `#27AE60` | `#27AE60` | `#27AE60` |
| Invalid: фон | `tags-input-is-invalid-background-color` | `#FCE9EC` | `#352E44` | `#352E44` |
| Invalid: рамка | `tags-input-is-invalid-border-color` | `#E61E43` | `#E83556` | `#E83556` |
| Warning: фон | `tags-input-is-warning-background-color` | `#FFF5D6` | `#363B3B` | `#363B3B` |
| Warning: рамка | `tags-input-is-warning-border-color` | `#F1B704` | `#F1B704` | `#F1B704` |

## Чип (инвертированный вид)

Рамка чипа равна его фону. В Dark у чипа тень 30 %.

| Часть | Роль | Light, поле серое | Light, поле белое | Dark | Dark, приподнятая поверхность |
|---|---|---|---|---|---|
| Фон в покое | `tag-element-background-color` | `#FFFFFF` | `#ECEDEF` | `#2A384F` | `#1E2B3E` |
| Текст | `tag-element-text-color` | `#141F2F` | `#141F2F` | `#FFFFFF` | `#FFFFFF` |
| Выбран: фон | `tag-element-active-background-color` | `#EFF5FE` | `#EFF5FE` | `#32435F` | `#3A4E6E` |
| Выбран: рамка | `tag-element-active-border-color` | `#5D9AF4` | `#5D9AF4` | `#5D9AF4` | `#5D9AF4` |
| Выбран + hover: фон | `tag-element-active-background-color--hover` | `#DFEBFD` | `#DFEBFD` | `#3A4E6E` | `#435A7F` |
| Контур фокуса 2 px | `tag-element-outline-color--focus-visible` | `#BED6FB` | `#BED6FB` | `#6DA4F5` | `#6DA4F5` |

Валидация чипа (когда поле не в фокусе). В покое фон и рамка одного цвета. При hover
в Dark рамка другого цвета: valid `#23544B`, invalid `#85314C`, warning `#B38E17`.

| Статус | Роль | Light: фон | Light: hover | Dark: фон | Dark: hover |
|---|---|---|---|---|---|
| valid | `tag-element-is-valid-background-color` | `#A9DFBF` | `#93D6AF` | `#24624D` | `#23544B` |
| invalid | `tag-element-is-invalid-background-color` | `#F5A5B4` | `#F28EA1` | `#713149` | `#5D3048` |
| warning | `tag-element-is-warning-background-color` | `#FDDF82` | `#FDD454` | `#897223` | `#5F572F` |

Крестик чипа — как у [Tag](tag.md): иконка 16 px, зона около 24 px.

| Состояние крестика чипа | Роль | Light | Dark |
|---|---|---|---|
| Hover | `tag-element-delete-icon-text-color--hover` | `#46505D` | `#DEE0E3` |
| Нажато | `tag-element-delete-icon-text-color--active` | `#141F2F` | `#FFFFFF` |

Контур крестика чипа: 2 px, радиус 4 px, наружу на 3 px, роль
`tag-element-delete-icon-outline-color--focus-visible`.

## Крестик «очистить всё» и индикатор

| Часть | Роль | Light | Dark | Dark, приподнятая поверхность |
|---|---|---|---|---|
| Крестик: покой | `tags-input-icon-button-color` | `#79818B` | `#79818B` | `#79818B` |
| Крестик: hover | `tags-input-icon-button-color--hover` | `#141F2F` | `#FFFFFF` | `#FFFFFF` |
| Крестик: нажато | `tags-input-icon-button-color--active` | `#5D9AF4` | `#6DA4F5` | `#6DA4F5` |
| Крестик: контур фокуса | `tags-input-icon-button-outline-color--focus-visible` | `#BED6FB` | `#6DA4F5` | `#6DA4F5` |
| Индикатор проверки | `tags-input-loader-color` | `#5F6772` | `#79818B` | `#9298A0` |

## Не определено

Нет.

## Критерии соответствия

- [ ] Значения совпадают с таблицами этого файла.
