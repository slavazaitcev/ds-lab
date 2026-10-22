---
title: Действия и кнопки
summary: Иерархия кнопок, размещение, подтверждение опасных действий, строка действий в шапке, тон подписей.
read_when:
  - нужны кнопки и действия на экране
  - нужно подтверждение опасного действия
  - нужно решить, какая кнопка primary или secondary
keywords: [кнопки, действия, primary, secondary, подтверждение, удаление, иконки]
related: [../page-archetypes/form-page.md, ../page-archetypes/list-page.md]
---
## Статусы утверждений

[Общее] · [Только A] · [Только B] · [Расхождение] · [Несогласованность].

## Иерархия кнопок

**[Общее]** Иерархия задаётся компонентами-кнопками:
- Primary: `button--light-primary` (A), `App` (B).
- Secondary: `button--light-secondary`, `input--light-secondary` (поиск).
- Icon-кнопки: `btn-icon--light-primary`, `btn-icon--light-secondary`, `Icon Buttons`.

**[Общее]** Опасные действия — иконка `trash` (красная по `Red/100`), подтверждение
отдельным диалогом (см. [overlays.md](overlays.md)).

## Размещение

**[Общее]** Первичное действие создания/добавления — в строке над таблицей (слева
в A, справа в B).

**[Общее]** Подтверждение формы — внизу справа; отмена — слева.

## Подтверждение опасных действий

**[Только B]** Удаление сопровождается карточкой-подтверждением `Card` (480×192):
`Header` + `Body` с текстом + `Buttons` (Cancel + Danger). Тексты:
«Are you sure you want to delete «Group 6» App node?», «This action is irreversible
and will permanently remove the node and its associated configurations.»

## Строка действий в шапке

**[Расхождение]** A — `button--light-primary` (94px, «+») + поиск на всю ширину.
B — `Component 244` + `Component 243` справа от поиска.

## Тон кнопок

**[Общее]** Подписи — глагольные, краткие. Видимые примеры: «Search» (плейсхолдер),
«Edit signalling configuration» (заголовок модалки). Полный набор подписей кнопок
в metadata не виден (внутри компонентов).
