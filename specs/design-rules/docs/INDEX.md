---
title: Дизайн-код админ-приложений (референсы A и B)
summary: Как устроены страницы, навигация, списки и формы админ-приложений: оболочка, архетипы страниц, паттерны, компоненты, тексты, отличия A и B.
routing:
  - task: нужна страница со списком однотипных объектов
    files: [foundations/app-shell.md, page-archetypes/list-page.md, patterns/tables-and-lists.md, patterns/filters-and-search.md]
  - task: нужна страница сущности-конфигурации
    files: [page-archetypes/detail-page.md, patterns/tables-and-lists.md]
  - task: нужна форма создания или редактирования
    files: [page-archetypes/form-page.md, patterns/forms.md]
  - task: нужен многошаговый сценарий
    files: [page-archetypes/wizard-page.md, patterns/forms.md]
  - task: нужны точные имена компонентов
    files: [components-usage.md]
  - task: нужны тексты и форматы данных
    files: [content.md]
  - task: нужно выбрать вариант между A и B
    files: [divergences.md]
  - task: нужно увидеть правило на реальном экране
    files: [reference/INDEX.md]
  - task: нужна оболочка приложения
    files: [foundations/app-shell.md, patterns/navigation.md]
---
Дизайн-код админ-приложений уровня приложения: как устроены страницы,
навигация, списки и формы и как виджеты компонуются в экраны. Описано то, что
строится по образцу двух референсных админок A и B: общий дизайн-код и
поведение, а не pixel-perfect. Имя компонента указывается так, как записано в
макете, — по этому имени потребитель находит виджет в спеке UI-кита.

Для кого: команда, которая строит новое приложение по образцу референсных
админок A и B, и языковая модель.

## Содержание

- [glossary.md](glossary.md) — словарь терминов всех файлов
- [foundations](foundations/INDEX.md) — визуальная основа и оболочка приложения
- [page-archetypes](page-archetypes/INDEX.md) — архетипы страниц
- [patterns](patterns/INDEX.md) — паттерны
- [components-usage.md](components-usage.md) — инвентарь компонентов
- [content.md](content.md) — тексты и форматы
- [divergences.md](divergences.md) — сводка расхождений A/B
- [reference](reference/INDEX.md) — референс-примеры экранов

## Как читать

1. Незнакомый термин ищите в [Словаре](glossary.md).
2. Любому, кто делает интерфейс: [Визуальная основа](foundations/visual.md) и
   [Оболочка приложения](foundations/app-shell.md) — они общие для всех экранов.
3. Под конкретную задачу откройте по описи
   [page-archetypes/INDEX.md](page-archetypes/INDEX.md) нужные файлы.
4. Точные имена компонентов — в [components-usage.md](components-usage.md),
   тексты и форматы — в [content.md](content.md).
5. Сводка всех расхождений — в [divergences.md](divergences.md).
6. Правило на реальном экране и точные значения —
   [reference/INDEX.md](reference/INDEX.md).

## Статусы утверждений

| Статус | Значение |
|---|---|
| [Общее] | Одинаково решено в A и B. |
| [Только A] | Встречается только в A; в B такого архетипа/паттерна нет. |
| [Только B] | Встречается только в B; в A такого архетипа/паттерна нет. |
| [Расхождение] | Есть в обоих проектах, но решено по-разному. Описаны оба варианта рядом. |
| [Несогласованность] | Разные экраны внутри одного проекта сделаны по-разному. Указано, какой вариант чаще. |

## Как записаны значения

- Размеры — в px.
- Цвет — hex заглавными буквами (`#5D9AF4`).
- `*Источник: A.*` — проект, из макетов которого взят факт.
- Ссылки между файлами — относительные; разбор экрана и эталонный код — в
  [reference](reference/INDEX.md).
