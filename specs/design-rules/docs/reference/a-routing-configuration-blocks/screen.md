---
title: "«Routing Configurations / Table» — конфигурация (блоки) — разбор экрана"
summary: "Разбор экрана A «Routing Configurations / Table» (конфигурация, блоки): назначение, схема компоновки, оболочка, регионы, компоненты, тексты."
read_when:
  - нужно увидеть конфигурацию A на реальном экране
  - нужны значения конфигурации A словами: размеры, отступы, цвета, шрифты
  - нужно понять двухуровневую шапку таблицы на реальном экране
keywords: [референс, экран, A, конфигурация, блоки, разбор, Routing Configurations]
related: [./screen.md]
---
## Источник

Проект A. Кадр **1920 × 1200**.

## Роль референса

Экран деталей конфигурации — хлебные крошки, действия над сущностью, поиск и
раскрывающиеся блоки, каждый со своей таблицей с **двухуровневой шапкой**. Дополняет
[detail-page.md](../../page-archetypes/detail-page.md) и
[tables-and-lists.md](../../patterns/tables-and-lists.md).

## Назначение

Одна конфигурация (`Config_05`) узла `Node A`: список блоков маршрутизации
(`Initial Routing`, `Gx Routing`), внутри каждого — таблица правил. Сверху —
хлебные крошки, действия «Add Block» / «Edit Configuration» и поиск.

## Схема компоновки

```
┌──────────┬────────────────────────────────────────────────────────────┐
│  Menu    │  Routing Configurations -> Node A -> Config_05            │
│  256 px  │  (24 / Medium; ссылки #5D9AF4, хвост #141F2F)              │
│          │  [＋ Add Block] [✏ Edit Configuration]  [🔍 Поиск ______]   │
│  App     │  ┌ Initial Routing  ▸  ✏  (карточка, border #DEE0E3, r8) ┐ │
│          │  │ ┌ Table ──────────────────────────────────────────────┐│ │
│          │  │ │ # │ Name │        Routing Keys        │  Actions   ││ │
│          │  │ │   │      │ Adjacent Host │ AppID │ CommandCode │    ││ │
│          │  │ │   │      │ Destination-Realm │ Origin-Host │ …  ││ │
│          │  │ │ 1 │ Rule_Alpha │ … │ 316 │ … │ Yes │ … │         ││ │
│          │  │ … 4 строки по 76 px                                   ││ │
│          │  │ └─────────────────────────────────────────────────────┘│ │
│          │  │ ┌ IMEISV Normalisation  ▸  ✏  (свёрнутый блок) ────────┐│ │
│          │  └──────────────────────────────────────────────────────────┘ │
│          │  ┌ Gx Routing  ▸  ✏  (ещё одна таблица, 3 строки) ────────┐ │
│          │  ┌ Card-footer (h 72) ───────────────────────────────────────┐ │
└──────────┴────────────────────────────────────────────────────────────┘
```

## Оболочка

Меню 256 px — как в [a-routing-configurations-list](../a-routing-configurations-list/INDEX.md)
(активен `Routing configurations`). Контент — фон `#F1F2F3`.

## Регионы

**Хлебные крошки** — кликабельные: `Routing Configurations` и
`Node A` окрашены `#5D9AF4`, хвост `-> Config_05` — `#141F2F`. Кегль 24 / Medium.

**Строка действий**: кнопка-аутлайн `Add Block` (иконка `+`),
кнопка-аутлайн `Edit Configuration` (иконка карандаша) и **поле поиска** `Поиск`
(`flex-1`; `input--light-secondary`: белая заливка, рамка белая, радиус 4, иконка
лупы, текст `#79818B` 13 / Regular).

**Карточка блока** (ширина 1616, белая, рамка `#DEE0E3`, радиус 8):
- Шапка блока: иконочная кнопка `chevron` (`Icon Buttons`, 36 × 36) + название
  `Initial Routing` (16 / Medium `#141F2F`) + иконочная кнопка правки
  (`btn-icon--light-primary`, иконка 20).
- **Таблица с двухуровневой шапкой** (рамка `#DEE0E3`, радиус 8, фон
  шапки `#F8F8F8`; заголовки 14 / Medium `#5F6772`, центрирование у групп):
  - верхний уровень: `#`, `Name`, `Routing Keys` (объединяет 7 подколонок),
    `Actions` (объединяет `Route`, `Alt Route`), `AVP Management` (объединяет
    `Replacement`, `Swap`), `Options` (объединяет `Session Binding`, `SLF`);
  - нижний уровень групп: `Adjacent Host`, `AppID`, `CommandCode`, `Origin-Host`, `Origin-Realm`, `IMSI`.
  - Строки (h 76): `#` (33), `Name` (132), значения ключей; ячейка `IMSI` может
    содержать **две строки** (`000000000000000|` / `000000000000001`);
    `Rule_name`-подобные значения сопровождаются **счётчиком-пилюлей**
    (`Counter`, фон `#DFEBFD`, радиус 20, 14 × 14, текст 12); булевы значения —
    `Yes`.
  - Всего 4 строки (`Rule_Alpha`, `Rule_Beta`, …).

**Свёрнутые блоки-аккордеоны** (та же шапка «шеврон + название + иконки правки»,
h 52): `IMEISV Normalisation`, `Gx Routing` (с
собственной таблицей на 3 строки), `Routing 3`, `S6`. В шапке `IMEISV Normalisation` справа — две иконочные кнопки.

**Футер** (`Card-footer`, высота 72).

## Компоненты

`Menu`, `button--light-primary`, `input--light-secondary`, `Icon Buttons`,
`btn-icon--light-primary`, `Icon / chevron-right_24px`, `Icon / pencil_24px`,
`Icon / edit_24px`, `table-cell`, `Table`, `Table Head`, `Row N`, `Counter`,
`Card-footer`, `Pagination`.

## Тексты на экране

`Routing Configurations -> Node A -> Config_05` · `Add Block` ·
`Edit Configuration` · `Поиск` · `Initial Routing` · `#` · `Name` · `Routing Keys` ·
`Adjacent Host` · `AppID` · `CommandCode` · `Destination-Realm` · `Origin-Host` ·
`Origin-Realm` · `IMSI` · `Actions` · `Route` · `Alt Route` · `AVP Management` ·
`Replacement` · `Swap` · `Options` · `Session Binding` · `SLF` · `Rule_Alpha` ·
`Rule_Beta` · `Action_Alpha` · `IMEISV Normalisation` ·
`Gx Routing` · `Routing 3` · `S6`.

## Что иллюстрирует

- Экран деталей сущности: хлебные крошки-ссылки, действия над сущностью, поиск.
- Таблицу с **группами колонок** (двухуровневая шапка с объединёнными группами).
- Раскрывающиеся блоки-аккордеоны внутри страницы, каждый со своей таблицей.
- Многострочное значение в ячейке и счётчик-пилюлю рядом со значением.
- Различие форматов: значения `Yes`, длинные идентификаторы, диапазоны.

## Точные значения в коде

Точные размеры, цвета, шрифты и тексты «как есть» — в
[context.md](context.md).
