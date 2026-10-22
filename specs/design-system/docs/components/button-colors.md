---
title: Цвета кнопки Button
summary: Цвета Button по интентам и формам в Light и Dark — фон, текст, рамка, счётчик, контур фокуса, disabled.
read_when:
  - нужен точный цвет кнопки в состоянии покоя, hover, нажатия или disabled
  - нужен цвет кнопки в тёмной теме
keywords: [Button, variant, primary, secondary, outline, hover, pressed, цвет кнопки]
related: [./button.md, ../foundations/colors.md, ../foundations/themes.md]
---
| Поле | Значение |
|---|---|
| Виджеты в файле | `Button`, `ButtonFile` |
| Раздел спецификации | «Цвета»; остальные разделы — в [Button](button.md) |

## Заливка

Цвета формы «Заливка». Строки «Фон: hover» и «Фон: нажато» — фон. Цвет
«Нажато» совпадает с цветом «Выбрано». Рамка заливки всегда совпадает с фоном.

| Часть | Роль | Light | Dark |
|---|---|---|---|
| Фон: покой (`primary`) | `btn-primary-background-color` | `#5D9AF4` | `#3B5683` |
| Фон: hover (`primary`) | `btn-primary-background-color--hover` | `#6DA4F5` | `#405D8E` |
| Фон: нажато (`primary`) | `btn-primary-background-color--active` | `#7DAEF6` | `#456499` |
| Текст (`primary`) | `btn-primary-text-color` | `#FFFFFF` | `#FFFFFF` |
| Счётчик: фон (`primary`) | `btn-primary-counter-background-color` | `#FFFFFF` | `#FFFFFF` |
| Счётчик: текст (`primary`) | `btn-primary-counter-text-color` | `#5D9AF4` | `#3B5683` |
| Контур фокуса (`primary`) | `btn-primary-outline-color--focus-visible` | `#BED6FB` | `#2C4162` |
| Disabled: фон (`primary`) | `btn-primary-background-color--disabled` | `#B0B4BA` | `#79818B` |
| Disabled: текст (`primary`) | `btn-primary-text-color--disabled` | `#FFFFFF` | `#FFFFFF` |
| Фон: покой (`secondary`) | `btn-secondary-background-color` | `#EFF5FE` | `#263348` |
| Фон: hover (`secondary`) | `btn-secondary-background-color--hover` | `#DFEBFD` | `#28364C` |
| Фон: нажато (`secondary`) | `btn-secondary-background-color--active` | `#CEE1FC` | `#2A384F` |
| Текст (`secondary`) | `btn-secondary-text-color` | `#5D9AF4` | `#FFFFFF` |
| Счётчик: фон (`secondary`) | `btn-secondary-counter-background-color` | `#5D9AF4` | `#FFFFFF` |
| Счётчик: текст (`secondary`) | `btn-secondary-counter-text-color` | `#FFFFFF` | `#263348` |
| Контур фокуса (`secondary`) | `btn-secondary-outline-color--focus-visible` | `#BED6FB` | `#1E2B3E` |
| Disabled: фон (`secondary`) | `btn-secondary-background-color--disabled` | `#DEE0E3` | `#28364C` |
| Disabled: текст (`secondary`) | `btn-secondary-text-color--disabled` | `#5F6772` | `#FFFFFF` |
| Фон: покой (`success`) | `btn-success-background-color` | `#27AE60` | `#27AE60` |
| Фон: hover (`success`) | `btn-success-background-color--hover` | `#3DB670` | `#26A25D` |
| Фон: нажато (`success`) | `btn-success-background-color--active` | `#52BE80` | `#26945A` |
| Текст (`success`) | `btn-success-text-color` | `#FFFFFF` | `#FFFFFF` |
| Счётчик: фон (`success`) | `btn-success-counter-background-color` | `#FFFFFF` | `#FFFFFF` |
| Счётчик: текст (`success`) | `btn-success-counter-text-color` | `#27AE60` | `#27AE60` |
| Контур фокуса (`success`) | `btn-success-outline-color--focus-visible` | `#A9DFBF` | `#23544B` |
| Disabled: фон (`success`) | `btn-success-background-color--disabled` | `#B0B4BA` | `#79818B` |
| Disabled: текст (`success`) | `btn-success-text-color--disabled` | `#FFFFFF` | `#FFFFFF` |
| Фон: покой (`danger`) | `btn-danger-background-color` | `#E83556` | `#D43554` |
| Фон: hover (`danger`) | `btn-danger-background-color--hover` | `#EB4B69` | `#C13352` |
| Фон: нажато (`danger`) | `btn-danger-background-color--active` | `#EE627B` | `#AC3350` |
| Текст (`danger`) | `btn-danger-text-color` | `#FFFFFF` | `#FFFFFF` |
| Счётчик: фон (`danger`) | `btn-danger-counter-background-color` | `#FFFFFF` | `#FFFFFF` |
| Счётчик: текст (`danger`) | `btn-danger-counter-text-color` | `#E83556` | `#D43554` |
| Контур фокуса (`danger`) | `btn-danger-outline-color--focus-visible` | `#F5A5B4` | `#5D3048` |
| Disabled: фон (`danger`) | `btn-danger-background-color--disabled` | `#B0B4BA` | `#79818B` |
| Disabled: текст (`danger`) | `btn-danger-text-color--disabled` | `#FFFFFF` | `#FFFFFF` |
| Фон: покой (`warning`) | `btn-warning-background-color` | `#FCC51D` | `#F1B704` |
| Фон: hover (`warning`) | `btn-warning-background-color--hover` | `#FCCF40` | `#DCAA0B` |
| Фон: нажато (`warning`) | `btn-warning-background-color--active` | `#FDD454` | `#C89B10` |
| Текст (`warning`) | `btn-warning-text-color` | `#FFFFFF` | `#FFFFFF` |
| Счётчик: фон (`warning`) | `btn-warning-counter-background-color` | `#FFFFFF` | `#FFFFFF` |
| Счётчик: текст (`warning`) | `btn-warning-counter-text-color` | `#FCC51D` | `#F1B704` |
| Контур фокуса (`warning`) | `btn-warning-outline-color--focus-visible` | `#FEE495` | `#746529` |
| Disabled: фон (`warning`) | `btn-warning-background-color--disabled` | `#B0B4BA` | `#79818B` |
| Disabled: текст (`warning`) | `btn-warning-text-color--disabled` | `#FFFFFF` | `#FFFFFF` |
| Фон: покой (`info`) | `btn-info-background-color` | `#04CCF3` | `#04CCF3` |
| Фон: hover (`info`) | `btn-info-background-color--hover` | `#1ED2F5` | `#07BDE2` |
| Фон: нажато (`info`) | `btn-info-background-color--active` | `#36D6F5` | `#0AACCF` |
| Текст (`info`) | `btn-info-text-color` | `#FFFFFF` | `#FFFFFF` |
| Счётчик: фон (`info`) | `btn-info-counter-background-color` | `#FFFFFF` | `#FFFFFF` |
| Счётчик: текст (`info`) | `btn-info-counter-text-color` | `#04CCF3` | `#04CCF3` |
| Контур фокуса (`info`) | `btn-info-outline-color--focus-visible` | `#9BEBFA` | `#185D77` |
| Disabled: фон (`info`) | `btn-info-background-color--disabled` | `#B0B4BA` | `#79818B` |
| Disabled: текст (`info`) | `btn-info-text-color--disabled` | `#FFFFFF` | `#FFFFFF` |
| Фон: покой (`dark`) | `btn-dark-background-color` | `#141F2F` | `#FFFFFF` |
| Фон: hover (`dark`) | `btn-dark-background-color--hover` | `#2E3948` | `#ECEDEF` |
| Фон: нажато (`dark`) | `btn-dark-background-color--active` | `#46505D` | `#DEE0E3` |
| Текст (`dark`) | `btn-dark-text-color` | `#FFFFFF` | `#141F2F` |
| Счётчик: фон (`dark`) | `btn-dark-counter-background-color` | `#FFFFFF` | `#141F2F` |
| Счётчик: текст (`dark`) | `btn-dark-counter-text-color` | `#141F2F` | `#FFFFFF` |
| Контур фокуса (`dark`) | `btn-dark-outline-color--focus-visible` | `#B0B4BA` | `#9298A0` |
| Disabled: фон (`dark`) | `btn-dark-background-color--disabled` | `#B0B4BA` | `#79818B` |
| Disabled: текст (`dark`) | `btn-dark-text-color--disabled` | `#FFFFFF` | `#141F2F` |
| Фон: покой (`light`) | `btn-light-background-color` | прозрачный | прозрачный |
| Фон: hover (`light`) | `btn-light-background-color--hover` | `#EFF5FE` | `#263348` |
| Фон: нажато (`light`) | `btn-light-background-color--active` | `#DFEBFD` | `#28364C` |
| Текст (`light`) | `btn-light-text-color` | `#5D9AF4` | `#FFFFFF` |
| Счётчик: фон (`light`) | `btn-light-counter-background-color` | `#5D9AF4` | `#FFFFFF` |
| Счётчик: текст (`light`) | `btn-light-counter-text-color` | `#FFFFFF` | `#263348` |
| Контур фокуса (`light`) | `btn-light-outline-color--focus-visible` | `#BED6FB` | `#1E2B3E` |
| Disabled: фон (`light`) | `btn-light-background-color--disabled` | прозрачный | прозрачный |
| Disabled: текст (`light`) | `btn-light-text-color--disabled` | `#9298A0` | `#FFFFFF` |
| Фон: покой (`link`) | `btn-text-link-background-color` | прозрачный | прозрачный |
| Фон: hover (`link`) | `btn-text-link-text-color--hover` | `#8EB8F7` | `#8EB8F7` |
| Фон: нажато (`link`) | `btn-text-link-text-color--active` | `#9EC2F8` | `#9EC2F8` |
| Текст (`link`) | `btn-text-link-text-color` | `#5D9AF4` | `#5D9AF4` |
| Счётчик: фон (`link`) | `btn-text-link-counter-background-color` | `#5D9AF4` | `#5D9AF4` |
| Счётчик: текст (`link`) | `btn-text-link-counter-text-color` | `#FFFFFF` | `#142130` |
| Контур фокуса (`link`) | `btn-text-link-outline-color--focus-visible` | `#BED6FB` | `#2C4162` |
| Disabled: фон (`link`) | `btn-text-link-background-color--disabled` | прозрачный | прозрачный |
| Disabled: текст (`link`) | `btn-text-link-text-color--disabled` | `#9298A0` | `#79818B` |

У `link` рамки нет; при hover и нажатии меняется цвет текста, а не фон.

## Формы «Контур», «Текст», «Иконка с интентом»

Фон прозрачный. Текст, рамка, иконка и индикатор загрузки — цвета акцента.
У `secondary`, `light` и `link` рамка светлее акцента: `#CEE1FC` в Light;
у `secondary` и `link` в Dark — `#2A384F`, у `light` в Dark — `#32435F`.

| Интент | Роль | Акцент Light | Акцент Dark |
|---|---|---|---|
| `primary` | `btn-outline-primary-text-color` | `#5D9AF4` | `#5D9AF4` |
| `info` | `btn-outline-info-text-color` | `#04CCF3` | `#04CCF3` |
| `success` | `btn-outline-success-text-color` | `#27AE60` | `#27AE60` |
| `warning` | `btn-outline-warning-text-color` | `#F1B704` | `#F1B704` |
| `danger` | `btn-outline-danger-text-color` | `#E61E43` | `#D43554` |
| `dark` | `btn-outline-dark-text-color` | `#141F2F` | `#FFFFFF` |
| `light` | `btn-outline-light-text-color` | `#5D9AF4` | `#FFFFFF` |
| `secondary` | `btn-outline-secondary-text-color` | `#5D9AF4` | `#FFFFFF` |
| `link` | `btn-outline-link-text-color` | `#5D9AF4` | `#5D9AF4` |

Для `text-<интент>` и `icon-<интент>` акцент — роли `btn-text-<интент>-text-color` и
`btn-icon-<интент>-text-color`. Значения те же, кроме `light` в Dark: текст и иконка —
`#5D9AF4`, белый — только у контура.

| Часть | Роль | Light | Dark |
|---|---|---|---|
| Счётчик: фон | `btn-outline-<интент>-counter-background-color` | цвет акцента | цвет акцента; у `secondary` — `#FFFFFF` |
| Счётчик: текст | `btn-outline-<интент>-counter-text-color` | `#FFFFFF` | `#FFFFFF`; у `secondary` — `#142130` |
| Disabled: текст и рамка | `btn-outline-<интент>-text-color--disabled` (текст), `btn-outline-<интент>-border-color--disabled` (рамка) | `#9298A0` | `#79818B` |
| Disabled: фон | `btn-outline-<интент>-background-color--disabled` | прозрачный | прозрачный |

## Форма «Иконка, нейтральная» (`icon`)

| Часть | Роль | Light | Dark |
|---|---|---|---|
| Покой: иконка | `btn-icon-text-color` | `#79818B` | `#79818B` |
| Hover: иконка | `btn-icon-text-color--hover` | `#141F2F` | `#FFFFFF` |
| Нажато: иконка | `btn-icon-text-color--active` | `#5D9AF4` | `#6DA4F5` |
| Контур фокуса | `btn-icon-outline-color--focus-visible` | `#BED6FB` | `#6DA4F5` |

## Счётчик

| Форма | Роль | Фон счётчика | Текст счётчика |
|---|---|---|---|
| Заливка цветного интента | `btn-<интент>-counter-background-color` (фон), `btn-<интент>-counter-text-color` (текст) | белый | цвет акцента |
| Заливка `secondary` и `light` | `btn-<интент>-counter-background-color` (фон), `btn-<интент>-counter-text-color` (текст) | цвет акцента | белый; в Dark — `#263348` |

## Валидация

Валидационные состояния применяются к любой форме и берут точные палитры
интентов `success`, `danger`, `warning`: `is-valid` — строка `success` в таблице
«Заливка», `is-invalid` — строка `danger`, `is-warning` — строка `warning` —
те же значения фона, текста, рамки, счётчика, индикатора и контура в Light и
Dark. Для форм «Контур», «Текст» и «Иконка с интентом» — палитры
`outline-<интент>`, `text-<интент>`, `icon-<интент>` этих интентов (акцент
`success`/`danger`/`warning`).

## Не определено

Нет.

## Критерии соответствия

- [ ] Цвета фона, текста, счётчика и контура заливки совпадают с таблицами Light и Dark.
- [ ] Рамка заливки равна фону; у контура — цвет акцента; у текстовых форм
      рамки нет.
- [ ] «Нажато» и «Выбрано» совпадают по цвету.
- [ ] У `link` при hover и нажатии меняется цвет текста, а не фон.
- [ ] Нейтральная иконка `icon`: покой `#79818B`; hover `#141F2F` в Light и `#FFFFFF` в Dark.
