---
title: Инвентарь компонентов
summary: Имя компонента → роль на экране, статус A/B, частотность — когда нужны точные имена компонентов.
read_when:
  - нужны точные имена компонентов для экрана
  - нужно узнать, какой компонент как называется в макете
  - нужна частотность использования компонентов
  - нужно узнать, есть ли компонент в A или B
keywords: [компоненты, инвентарь, components, имена компонентов, частотность, Button, Menu]
related: [./foundations/visual.md, ./page-archetypes/list-page.md]
---
## Статусы утверждений

[Общее] = есть в A и B; A = только A; B = только B.

| Имя компонента | Роль на экране | Статус |
|---|---|---|
| `table-cell` | ячейка таблицы (шапка/строка) | Общее |
| `Table Head` / `Table Header` | шапка таблицы | Общее |
| `Row` (Row 1..N) | строка таблицы | Общее |
| `Input & Select` | поле формы (label + input/select), h=62 | Общее |
| `Textarea` | многострочное поле формы | Общее |
| `Button` | кнопка (generic) | Общее |
| `button--light-primary` | primary-кнопка | Общее |
| `button--light-secondary` | secondary-кнопка | Общее |
| `btn-icon--light-primary` | icon-кнопка (primary) | Общее |
| `btn-icon--light-secondary` | icon-кнопка (secondary) | Общее |
| `input--light-secondary` | поле поиска | A |
| `Menu` | боковая навигация | Общее |
| `Tabs` / `Tabs Local` | вкладки | Общее |
| `Header` | заголовок (шапки/карточки/модалки) | Общее |
| `Footer` | футер формы/модалки (кнопки) | Общее |
| `Card-footer` | футер карточки конфигурации | A |
| `Dialog` | диалог | A |
| `Drop-down Table` | сворачиваемая подтаблица/секция | B |
| `Group Button` | группа кнопок | A |
| `Input group / create node` | группа полей создания ноды | A |
| `Legend` | легенда (обозначения) | A |
| `Tooltip` / `Cursor` | hover-подсказка (mock) | B |
| `dropdown` | выбор из списка (транспорт) | A |
| `Picklist`… (не найден) | — | — |
| `Icon Buttons` | контейнер icon-кнопок | Общее |
| `Icon / pencil_24px` / `Icon / edit_24px` | редактировать | Общее |
| `Icon / trash_24px`, `trash_16px` / `trash_20px` | удалить | Общее |
| `Icon / copy_24px` | копировать | A |
| `Icon / download_24px` | скачать | A |
| `Icon / check_24px` | подтвердить/выбрать | A |
| `Icon / plus_24px`, `plus_24px` | добавить | Общее |
| `Icon / x-close_16px` / `Icon / x-close_24px` | закрыть модалку | Общее |
| `Icon / arrow-left_24px` | назад (крошки) | A |
| `Icons / 16px / Поиск` | иконка поиска | B |
| `bi:arrow-left-short` | сортировка (bootstrap) | B |
| `plus_24px`, `link_24px`, `pencil_16px` | кнопки с иконкой (голые) | B |
| `Component 13` / `Component 14` | кнопки модалок (Cancel/Save) | B |
| `Component 243/244/245` | кнопки-действия шапки | B |
| `Component 360/361/362/363/364/365` | кнопки/иконки блоков-групп | B+A |
| `Component 787/788/789/790` | кнопки-иконки действий | A |
| `Main Header Component` | составная шапка (title+tabs+search) | B |

## Частотность (по изученным страницам)

- **A**: `table-cell` (×1481), `Input & Select` (×651), `Icon / pencil_24px` (×212),
  `Button` (×116), `Icon Buttons` (×105), `Menu` (×96), `Icon / arrow-left_24px` (×96).
- **B**: `Row 1..8` (×19 кажд.), `Button` (×18), `btn-icon--light-secondary` (×18),
  `Table Head` (×16), `Component 360/362/364/365` (десятки), `Drop-down Table` (×8).
