---
title: Цвета чипа Tag
summary: Цвета Tag в Light и Dark — чип по состояниям, крестик, валидация, индикатор загрузки, правка, инвертированный фон.
read_when:
  - нужен точный цвет чипа в покое, hover, выборе или фокусе
  - нужен цвет чипа на инвертированном фоне или в тёмной теме
keywords: [Tag, TagList, чип, themeBackgroundInvert, цвет чипа]
related: [./tag.md, ../foundations/colors.md, ../foundations/themes.md]
---
| Поле | Значение |
|---|---|
| Виджеты в файле | `Tag`, `TagList` |
| Раздел спецификации | «Цвета»; остальные разделы — в [Tag и TagList](tag.md) |

## Чип, Light

| Часть | Роль | Покой | Hover | Выбран | Выбран + hover | Фокус |
|---|---|---|---|---|---|---|
| Фон | gray 10 / gray 20 / light-blue 10 / light-blue 20 / gray 10 | `#ECEDEF` | `#DEE0E3` | `#EFF5FE` | `#DFEBFD` | как в покое |
| Рамка | gray 10 / gray 20 / light-blue 100 / light-blue 100 / light-blue 100 | `#ECEDEF` | `#DEE0E3` | `#5D9AF4` | `#5D9AF4` | `#5D9AF4` |
| Контур | — / — / — / — / light-blue 40 | нет | нет | нет | нет | `#BED6FB` |
| Счётчик: фон | white 100 / white 100 / light-blue 30 / light-blue 40 / white 100 | `#FFFFFF` | `#FFFFFF` | `#CEE1FC` | `#BED6FB` | как в покое |
| Счётчик: текст | gray 100 | `#141F2F` | `#141F2F` | `#141F2F` | `#141F2F` | `#141F2F` |
| Текст | gray 100 | `#141F2F` | `#141F2F` | `#141F2F` | `#141F2F` | `#141F2F` |
| Иконка | gray 60 | `#79818B` | `#79818B` | `#79818B` | `#79818B` | `#79818B` |
| Тень | — | нет | нет | нет | нет | нет |

## Чип, Dark

| Часть | Роль | Покой | Hover | Выбран | Выбран + hover | Фокус |
|---|---|---|---|---|---|---|
| Фон | blue-gray 120 / blue-gray 110 / blue-gray 120 / blue-gray 130 / blue-gray 120 | `#3A4E6E` | `#32435F` | `#3A4E6E` | `#435A7F` | как в покое |
| Рамка | blue-gray 120 / blue-gray 110 / light-blue 100 / light-blue 100 / light-blue 100 | `#3A4E6E` | `#32435F` | `#5D9AF4` | `#5D9AF4` | `#5D9AF4` |
| Контур | — / — / — / — / blue-dark 50 | нет | нет | нет | нет | `#2C4162` |
| Счётчик: фон | blue-gray 100 | `#2A384F` | `#2A384F` | `#2A384F` | `#2A384F` | как в покое |
| Счётчик: текст | white 100 | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| Текст | white 100 | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| Иконка | gray 40 | `#B0B4BA` | `#B0B4BA` | `#B0B4BA` | `#B0B4BA` | `#B0B4BA` |
| Тень | black 100 | чёрный 30 % | чёрный 30 % | чёрный 30 % | чёрный 30 % | чёрный 30 % |

## Крестик

| Состояние | Роль | Light | Dark |
|---|---|---|---|
| Покой | gray 60 / gray 40 | `#79818B` | `#B0B4BA` |
| Hover | gray 80 / gray 20 | `#46505D` | `#DEE0E3` |
| Нажато | gray 100 / white 100 | `#141F2F` | `#FFFFFF` |
| Контур фокуса | light-blue 40 / light-blue 90 | `#BED6FB` | `#6DA4F5` |

Контур крестика: 2 px, скругление 4 px.

## Валидация

Рамка в покое и при hover равна фону.

| Статус | Роль | Фон: покой | Фон: hover | Счётчик Light: фон | Счётчик Light: текст | Счётчик Dark: фон | Счётчик Dark: текст | Контур Light | Контур Dark | Рамка при hover, Dark |
|---|---|---|---|---|---|---|---|---|---|---|
| valid | green 40 / green 50 / white 100 / gray 100 / white 100 / green-dark 40 / green 80 / green-dark 80 / green-dark 30 | `#A9DFBF` | `#93D6AF` | `#FFFFFF` | `#141F2F` | `#FFFFFF` | `#24624D` | `#52BE80` | `#26945A` | `#23544B` |
| warning | yellow 50 / yellow 70 / white 100 / gray 100 / white 100 / yellow-dark 50 / yellow 80 / yellow-dark 80 / yellow-dark 70 | `#FDDF82` | `#FDD454` | `#FFFFFF` | `#141F2F` | `#FFFFFF` | `#897223` | `#FCCF40` | `#C89B10` | `#5F572F` |
| invalid | red 40 / red 50 / white 100 / gray 100 / white 100 / red-dark 40 / red 80 / red-dark 80 / red-dark 50 | `#F5A5B4` | `#F28EA1` | `#FFFFFF` | `#141F2F` | `#FFFFFF` | `#713149` | `#EB4B69` | `#C13352` | `#85314C` |

Контур крестика в статусе валидации — того же цвета, что контур фокуса статуса.

## Индикатор загрузки

| Тема | Роль | Цвет дуги |
|---|---|
| Light | gray 70 | `#5F6772` |
| Dark | white 100 | `#FFFFFF` |

## Правка

| Часть | Роль | Light | Dark |
|---|---|---|---|
| Фон | — | прозрачный | прозрачный |
| Рамка | light-blue 100 | `#5D9AF4` | `#5D9AF4` |
| Счётчик: фон | gray 20 / blue-gray 130 | `#DEE0E3` | `#435A7F` |
| Счётчик: текст | gray 100 / white 100 | `#141F2F` | `#FFFFFF` |
| Тень | — | нет | нет |

## Инвертированный фон (`themeBackgroundInvert`)

Для чипа внутри поля ввода.

| Состояние | Роль | Light | Dark |
|---|---|---|---|
| Фон в покое | white 100 / blue-gray 100 | `#FFFFFF` | `#2A384F` |
| Рамка | white 100 / blue-gray 100 | `#FFFFFF` | `#2A384F` |
| Фон при hover | gray 20 / blue-gray 110 | `#DEE0E3` | `#32435F` |
| Счётчик в покое | gray 20 / blue-gray 130 | `#DEE0E3` | `#435A7F` |
| Счётчик при hover | white 100 / blue-gray 130 | `#FFFFFF` | `#435A7F` |
| Выбран | light-blue 10 / blue-gray 110 | `#EFF5FE` | `#32435F` |
| Выбран + hover | light-blue 20 / blue-gray 120 | `#DFEBFD` | `#3A4E6E` |

Статусы и контуры — как у обычного чипа.

## Не определено

Нет.

## Критерии соответствия

- [ ] Значения совпадают с таблицами этого файла.
