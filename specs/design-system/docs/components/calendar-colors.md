---
title: Цвета календаря Calendar
summary: Цвета Calendar в Light и Dark — панель, навигация, ячейки дней, выбор и диапазон, точка «сегодня», панель времени, подвал.
read_when:
  - нужен точный цвет выбранного дня, диапазона или точки «сегодня»
  - нужен цвет календаря в тёмной теме
keywords: [Calendar, InputDateWithCalendar, календарь, datepicker, диапазон, цвет дня]
related: [./calendar.md, ./calendar-sizes.md, ../foundations/colors.md, ../foundations/themes.md]
---
| Поле | Значение |
|---|---|
| Виджеты в файле | `Calendar`, `InputDateWithCalendar` |
| Раздел спецификации | «Цвета»; остальные разделы — в [Calendar и InputDateWithCalendar](calendar.md) |

## Общее

Колонка Dark Secondary — справочная, см. [Темы](../foundations/themes.md).
Light Secondary совпадает с Light.

## Примитивы

| Примитив | Значение |
|---|---|
| white | `#FFFFFF` |
| gray 10 | `#ECEDEF` |
| gray 20 | `#DEE0E3` |
| gray 30 | `#C5C9CD` |
| gray 50 | `#9298A0` |
| gray 60 | `#79818B` |
| gray 70 | `#5F6772` |
| gray 100 | `#141F2F` |
| light-blue 10 | `#EFF5FE` |
| light-blue 20 | `#DFEBFD` |
| light-blue 30 | `#CEE1FC` |
| light-blue 40 | `#BED6FB` |
| light-blue 50 | `#AECCF9` |
| light-blue 90 | `#6DA4F5` |
| light-blue 100 | `#5D9AF4` |
| green 90 | `#3DB670` |
| green-dark 100 | `#27AE60` |
| blue-dark 70 | `#364F78` |
| blue-dark 80 | `#3B5683` |
| blue-dark 90 | `#405D8E` |
| blue-dark 100 | `#456499` |
| blue-gray 50 | `#1E2B3E` |
| blue-gray 80 | `#263348` |
| blue-gray 90 | `#28364C` |
| blue-gray 100 | `#2A384F` |
| blue-gray 110 | `#32435F` |
| blue-gray 120 | `#3A4E6E` |
| blue-gray 130 | `#435A7F` |

## Панель и навигация

| Часть | Роль | Light | Dark | Dark Secondary |
|---|---|---|---|---|---|
| Фон панели | `date-picker-background-color` | `#FFFFFF` | `#1E2B3E` | `#2A384F` |
| Тень | `date-picker-box-shadow-color` | `#141F2F` 10 % | чёрный 30 % | чёрный 30 % |
| Линии-разделители | `date-picker-divider-border-color` | `#ECEDEF` | `#2A384F` | `#32435F` |
| Заголовок | `date-picker-navigation-label-text-color` | `#141F2F` | `#FFFFFF` | `#FFFFFF` |
| Шеврон | `date-picker-navigation-arrow-text-color` | `#79818B` | `#79818B` | `#9298A0` |
| Шеврон: hover (фон и рамка) | `date-picker-navigation-arrow-background-color--hover` | `#ECEDEF` | `#2A384F` | `#32435F` |
| Контур фокуса шеврона и заголовка | `date-picker-navigation-arrow-outline-color--focus-visible`; `date-picker-navigation-label-outline-color--focus-visible` | `#BED6FB` | `#3B5683` | `#3B5683` |
| Дни недели | `date-picker-month-view-weekday-text-color` | `#79818B` | `#79818B` | `#9298A0` |

## Ячейки

| Часть | Роль | Light | Dark | Dark Secondary |
|---|---|---|---|---|---|
| Число | `date-picker-tile-text-color` | `#141F2F` | `#FFFFFF` | `#FFFFFF` |
| Число соседнего месяца | `date-picker-month-view-tile-neighboringMonth-text-color` | `#79818B` | `#79818B` | `#9298A0` |
| Пятно hover и фокуса | `date-picker-tile-background-color--hover` | `#ECEDEF` | `#28364C` | `#32435F` |
| Выбран: фон | `date-picker-tile-hasActive-background-color` | `#5D9AF4` | `#3B5683` | `#456499` |
| Выбран + hover: фон | `date-picker-tile-hasActive-background-color--hover` | `#6DA4F5` | `#405D8E` | `#405D8E` |
| Выбран: число | `date-picker-tile-hasActive-text-color` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| Начало и конец диапазона: фон | `date-picker-tile-rangeStart-background-color`; `date-picker-tile-rangeEnd-background-color` | `#5D9AF4` | `#3B5683` | `#456499` |
| Начало и конец диапазона + hover | `date-picker-tile-rangeStart-background-color--hover`; `date-picker-tile-rangeEnd-background-color--hover` | `#6DA4F5` | `#405D8E` | `#405D8E` |
| Внутри диапазона: полоса | `date-picker-tile-range-background-color` | `#EFF5FE` | `#32435F` | `#32435F` |
| Внутри диапазона + hover | `date-picker-tile-range-background-color--hover` | `#CEE1FC` | `#3A4E6E` | `#3A4E6E` |
| Точка «сегодня» | `date-picker-tile-now--after-background-color` | `#3DB670` | `#27AE60` | `#27AE60` |
| Точка «сегодня» на выбранном дне | `date-picker-tile-now--after-hasActive-background-color` | `#FFFFFF` | `#27AE60` | `#27AE60` |
| Конец диапазона в соседнем месяце: фон | `date-picker-month-view-tile-neighboringMonth-rangeStart-background-color` | `#BED6FB` | `#3A4E6E` | `#364F78` |
| Конец диапазона в соседнем месяце + hover | `date-picker-month-view-tile-neighboringMonth-rangeStart-background-color--hover` | `#AECCF9` | `#435A7F` | `#405D8E` |
| Конец диапазона в соседнем месяце: число | `date-picker-month-view-tile-neighboringMonth-rangeStart-text-color` | `#5F6772` | `#C5C9CD` | `#C5C9CD` |

## Время и подвал

| Часть | Роль | Light | Dark | Dark Secondary |
|---|---|---|---|---|---|
| Заголовок панели времени | `time-picker-header-text-color` | `#5F6772` | `#C5C9CD` | `#C5C9CD` |
| Разделитель «:» | `time-picker-time-list-divider-text-color` | `#9298A0` | `#79818B` | `#79818B` |
| Поле времени: фон и рамка | `time-picker-time-list-item-form-control-background-color`; `time-picker-time-list-item-form-control-border-color` | `#ECEDEF` | `#2A384F` | `#32435F` |
| Поле времени: рамка в фокусе | `time-picker-time-list-item-form-control-border-color--focus` | `#5D9AF4` | `#5D9AF4` | `#5D9AF4` |
| «Отмена»: фон в покое | `date-time-range-picker-controls-btn-cancel-background-color` | `#EFF5FE` | `#263348` | `#32435F` |
| «Отмена»: фон при hover | `date-time-range-picker-controls-btn-cancel-background-color--hover` | `#DFEBFD` | `#28364C` | `#3A4E6E` |
| «Отмена»: фон при нажатии | `date-time-range-picker-controls-btn-cancel-background-color--active` | `#CEE1FC` | `#2A384F` | `#435A7F` |
| «Отмена»: фон в disabled | `date-time-range-picker-controls-btn-cancel-background-color--disabled` | `#DEE0E3` | `#79818B` | `#79818B` |

## Не определено

Нет.

## Критерии соответствия

- [ ] Значения совпадают с таблицами этого файла.
