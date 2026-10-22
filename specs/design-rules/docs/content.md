---
title: Тексты и форматы
summary: Язык интерфейса, заголовки, подписи, пустые состояния и ошибки, форматы дат и версий, тон — тексты и форматы данных.
read_when:
  - нужны тексты интерфейса
  - нужны заголовки, подписи, пустые состояния и ошибки
  - нужны форматы дат и версий
  - нужно решить тон текста
  - нужно узнать формат счётчика списка
keywords: [тексты, форматы, контент, заголовки, подписи, даты, версии, тон]
related: [./foundations/visual.md, ./components-usage.md]
---
## Статусы утверждений

[Общее] · [Только A] · [Только B] · [Расхождение] · [Несогласованность].

## Язык интерфейса

**[Расхождение]** Интерфейс — преимущественно **английский** в обоих проектах, но
подмешан русский в разных местах:
- A: пустые состояния и заметки дизайнера — русские («Нет действующей версии»),
  надписи/заголовки действий — английские (mix).
- B: UI — английский; выбор колонок и заметки дизайнера — русские («Столбцы для
  отображения»).

## Заголовки

**[Общее]** Заголовок раздела — существительное во множественном/единственном числе:
«Instances», «Node Configurations», «App Connections».

**[Общее]** Заголовок модалки — глагольная фраза: «Edit signalling configuration»,
«Creating CEX».

## Кнопки

**[Общее]** Краткие глагольные/существительные подписи. Видимы: «Search» (плейсхолдер),
«Label»/«Placeholder» (заглушки). Полные подписи кнопок скрыты внутри компонентов.

## Пустые состояния и ошибки

**[Только A]** «Нет действующей версии» / «Для создания версии добавьте CEX profiles».
**[Только B]** «Configuration signalling: No version», «Configuration routing: No version».

## Удаление / подтверждение (B)

**[Только B]** Заголовок «Delete Node»; тело «Are you sure you want to delete
«Group 6» App node?», «This action is irreversible and will permanently remove the
node and its associated configurations.», «This App node has active signalling and
routing configurations.»

## Уведомления (B)

**[Только B]** ««Group 5» App node has been successfully deleted.» (успех);
««Group 5» App node has active subscriber.» (ошибка); «Informational notification»;
«Error message».

## Форматы данных

### Строка версии

**[Расхождение]** Формат строки о версии/конфигурации:
- **A**: «`Routing configuration: Config | 1 Version from 2025.08.29 13:38`» →
  `<type> configuration: <name> | <N> Version from <DD.MM.YYYY HH:MM>`.
- **B**: «`Configuration routing: Config_Routing | 1 Version from Mar 13, 2024, 14:09`» →
  `Configuration <type>: <name> | <N> Version from <Mon DD, YYYY, HH:MM>`.

### Хлебные крошки

**[Расхождение]** A: «Subscribers -> Node_A -> Status link» и «Site configuration /
Node 1/ Version 1»; B: «Routing -> ID-Configuration name | Version 1 -> SCCP 0 | Name».

### Счётчик списка

**[Общее]** «X of Y» («Routes: 6 of 77»).

### Единицы / адреса

**[Только A]** «This node is located in Server Room A, Rack 3, slot 5» (описание
расположения); «Vendor specific appliction id» (поле). → смесь EN/RU, технический тон.

## Тон

**[Общее]** Технический, англоязычный, с элементами русской документации внутри
файла (заметки дизайнера — вопросы/указания на русском).
