---
title: Сводка расхождений и несогласованностей
summary: Таблица всех [Расхождение] и [Несогласованность] A/B со ссылкой на профильный файл — когда нужно выбрать вариант между A и B.
read_when:
  - нужно выбрать вариант между A и B
  - нужно узнать, где A и B различаются
  - нужно узнать, где внутри проекта сделано по-разному
  - нужно сверить частоту варианта
keywords: [расхождения, несогласованности, отличия, A, B, сводка, divergences]
related: [./foundations/visual.md, ./patterns/tables-and-lists.md]
---
## Статусы утверждений

[Общее] · [Только A] · [Только B] · [Расхождение] · [Несогласованность].

## [Расхождение] между A и B

| # | Тема | A | B | Где описано |
|---|---|---|---|---|
| 1 | Ширина навигации | `Menu` 256px (полное) | `Menu` 72px (иконочная рейка) | [app-shell.md](foundations/app-shell.md), [navigation.md](patterns/navigation.md) |
| 2 | Формат даты в строке версии | `2025.08.29 13:38` | `Mar 13, 2024, 14:09` | [content.md](content.md) |
| 3 | Действия в строке таблицы | иконки check/download/pencil/copy/trash | edit+trash у заголовка группы | [tables-and-lists.md](patterns/tables-and-lists.md) |
| 4 | Заголовок 1 уровня | `Tittle 1 / Medium` (24) | `Tittle 1 / Bold` (24) | [visual.md](foundations/visual.md) |
| 5 | Шапка экрана | breadcrumbs + [btn][search] | title+tabs+[search][actions] | [app-shell.md](foundations/app-shell.md) |
| 6 | Форма в модалке/на странице | обе (700px / страница) | только модалка (480px) | [forms.md](patterns/forms.md), [overlays.md](patterns/overlays.md) |
| 7 | Цвет статуса успеха | не встречен | `Green / 100` #27AE60 | [visual.md](foundations/visual.md) |
| 8 | Группировка списка | карточки-конфигурации | сгрупп. таблицы + `Drop-down Table` | [tables-and-lists.md](patterns/tables-and-lists.md) |
| 9 | Язык интерфейса | mix EN/RU | EN (UI) + RU (аннотации) | [content.md](content.md) |
| 10 | Уведомления | не встречены | toast success/error | [notifications.md](patterns/notifications.md) |

## [Несогласованность] внутри проектов

| # | Тема | Проект | Варианты | Чаще |
|---|---|---|---|---|
| 11 | Разделитель хлебных крошек | A | « -> » vs « / » | « -> » |
| 12 | Размер полей формы на странице | A | 535px и 421px в сетке / 660px в модалке | по сценарию |
| 13 | Высота строк таблиц | A | 36px и 76px (в шапке 56/72) | 36px |
| 14 | Иконка закрытия модалки | A/B | `x-close_24px` (A) vs `x-close_16px` (B) | по проекту |

Каждая строка имеет источник в профильном файле.
