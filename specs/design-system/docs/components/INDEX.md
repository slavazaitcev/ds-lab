---
title: Виджеты — файлы спецификаций и инвентарь
summary: Все файлы спецификаций виджетов и все публичные имена autumn-ui — назначение, класс, файл, технический слой, устаревшие имена, зависимости.
---
Инвентарь публичных виджетов: имя, назначение в одну строку, класс и файл
спецификации. Все размеры, цвета и поведение — только в файлах спецификаций.
Имена приведены как в оригинале.

## Файлы

### Действия и кнопки: файлы

| Файл | Что задаёт |
|---|---|
| [button.md](button.md) | `Button`, `ButtonFile`: интенты и формы, размеры, состояния, счётчик, загрузка, выбор файла |
| [button-colors.md](button-colors.md) | цвета `Button` по интентам и формам в Light и Dark |
| [arrows-button.md](arrows-button.md) | `ArrowsButton`: пара кнопок «вверх» и «вниз» |
| [button-group.md](button-group.md) | `ButtonGroup`: четыре вида, `direction`, `single` / `multi` |
| [button-group-colors.md](button-group-colors.md) | цвета `ButtonGroup` по видам |

### Теги и фильтры: файлы

| Файл | Что задаёт |
|---|---|
| [tag.md](tag.md) | `Tag`, `TagList`: состав, размеры, состояния, правка; ряд чипов |
| [tag-colors.md](tag-colors.md) | цвета `Tag` |
| [tag-input.md](tag-input.md) | `TagInput`: ввод, удаление, перестановка чипов |
| [tag-input-colors.md](tag-input-colors.md) | цвета `TagInput` |
| [tag-filter.md](tag-filter.md) | `TagFilter`: панель условий-чипов и их редакторы |
| [tag-filter-colors.md](tag-filter-colors.md) | цвета `TagFilter` |

### Поля ввода и выбор: файлы

| Файл | Что задаёт |
|---|---|
| [input.md](input.md) | `InputText` и общая часть всех полей: маски, иконки, размеры, состояния, цвета |
| [input-textarea.md](input-textarea.md) | `InputTextArea`: строки, автовысота, полоса прокрутки |
| [input-number.md](input-number.md) | `InputNumber`, `InputMoney`: числа и суммы |
| [input-date-file.md](input-date-file.md) | `InputDate`, `InputDateWithCalendar`, `InputFile`: дата, время, файл |
| [input-group.md](input-group.md) | `Input`, `InputGroup`: несколько контролов в одной полосе |
| [input-group-colors.md](input-group-colors.md) | цвета `InputGroup` |
| [checkbox.md](checkbox.md) | `Checkbox`: `checkbox`, `radio`, `switch` |
| [form.md](form.md) | `Label`, `Feedback`, `HelperText`, `InfoIcon`, `FormWidgetGroup`: каркас поля |
| [selector.md](selector.md) | `Selector`, `SelectorInput`, `SelectorButton`, `SelectorTag`: выбор из списка |
| [selector-reference.md](selector-reference.md) | грани `SelectorReference*`: поле, кнопка, чип |
| [selector-dropdown.md](selector-dropdown.md) | `SelectorDropdown`: панель списка и строки |
| [autocomplete.md](autocomplete.md) | `Autocomplete`: подсказки к текстовому полю |

### Календарь: файлы

| Файл | Что задаёт |
|---|---|
| [calendar.md](calendar.md) | `Calendar`, `InputDateWithCalendar`: виды, одно значение и диапазон, поведение |
| [calendar-sizes.md](calendar-sizes.md) | размеры `Calendar` |
| [calendar-colors.md](calendar-colors.md) | цвета `Calendar` |

### Оверлеи: файлы

| Файл | Что задаёт |
|---|---|
| [modal.md](modal.md) | `Modal`: появление, закрытие, фокус, слои |
| [popover.md](popover.md) | `Popover`: способы открытия, положение, вложенность |
| [tooltip.md](tooltip.md) | `Tooltip`: размеры, цвета, ширина, поведение |
| [menu.md](menu.md) | `Menu` и его части |
| [offcanvas.md](offcanvas.md) | `Offcanvas`: стороны, размеры, анимация |
| [notifications.md](notifications.md) | карточка уведомления, стопка тостов, центр |

### Отображение: файлы

| Файл | Что задаёт |
|---|---|
| [avatar.md](avatar.md) | `Avatar`: портрет с заменой из имени или иконки |
| [callout.md](callout.md) | `Callout`: варианты, цвета, размеры |
| [loader.md](loader.md) | `Loader`: индикатор загрузки с процентом и без |
| [text-icon.md](text-icon.md) | `Text`, `Icon`: текст с разметкой и иконка |
| [lightbox.md](lightbox.md) | `Lightbox`: полноэкранная галерея |
| [lightbox-colors.md](lightbox-colors.md) | цвета `Lightbox` |
| [image-editor.md](image-editor.md) | `ImageEditorView`: изображение с масштабом и поворотом |
| [video.md](video.md) | `VideoPlayerView`: видеоплеер |
| [bsod.md](bsod.md) | `BSOD`: экран фатального сбоя |
| [table-pager.md](table-pager.md) | `TablePager`: постраничная навигация |

## Классификация

| Класс | Что значит |
|---|---|
| Примитив | элементарный контрол со своим видом |
| Составной | собран из других виджетов или задаёт вид поверх них |
| Паттерн | повторяемая сборка под сценарий |
| Основание | публичный, но видимую часть достраивает приложение |
| Часть | часть другого виджета; отдельно не используется |
| Технический слой | публичный, но ничего не рисует; отдельной спецификации нет |
| Устаревшее | есть, но не для новых экранов; указана замена |

## Действия и кнопки

| Имя | Назначение | Класс | Файл |
|---|---|---|---|
| `Button` | кнопка действия | примитив | [button.md](button.md) |
| `ArrowsButton` | пара кнопок «вверх» и «вниз» для пошагового изменения | составной | [arrows-button.md](arrows-button.md) |
| `ButtonFile` | кнопка, которая открывает выбор файла | составной | [button.md](button.md) |
| `ButtonGroup` | группа кнопок или вкладок как один контрол выбора | составной | [button-group.md](button-group.md) |

## Теги и фильтры

| Имя | Назначение | Класс | Файл |
|---|---|---|---|
| `Tag` | чип с данными | примитив | [tag.md](tag.md) |
| `TagList` | ряд чипов с удалением и перестановкой | составной | [tag.md](tag.md) |
| `TagInput` | поле, в котором текст превращается в чипы | составной | [tag-input.md](tag-input.md) |
| `TagFilter` | панель фильтров-чипов над таблицей | паттерн | [tag-filter.md](tag-filter.md) |

## Поля ввода и выбор

| Имя | Назначение | Класс | Файл |
|---|---|---|---|
| `InputText` | однострочное поле | примитив | [input.md](input.md) |
| `InputTextArea` | многострочное поле | примитив | [input-textarea.md](input-textarea.md) |
| `InputNumber` | числовое поле | составной | [input-number.md](input-number.md) |
| `InputMoney` | денежное поле | составной | [input-number.md](input-number.md) |
| `InputDate` | поле даты и времени | составной | [input-date-file.md](input-date-file.md) |
| `InputFile` | поле выбора файла | составной | [input-date-file.md](input-date-file.md) |
| `Input` | общее основание полей; видимую часть задаёт приложение | основание | [input-group.md](input-group.md) |
| `InputGroup` | несколько контролов в одной полосе с общей рамкой | составной | [input-group.md](input-group.md) |
| `Checkbox` | флажок, radio или переключатель | примитив | [checkbox.md](checkbox.md) |
| `Label`, `Feedback`, `HelperText`, `InfoIcon` | подпись, строка статуса, пояснение, значок справки | часть | [form.md](form.md) |
| `FormWidgetGroup`, `FormWidgetGroupReset` | невидимая связка каркаса поля | паттерн | [form.md](form.md) |
| `Selector` | выбор из списка: грань и панель | составной | [selector.md](selector.md) |
| `SelectorInput`, `SelectorButton`, `SelectorTag` | готовый выбор с гранью-полем, кнопкой или чипом | составной | [selector.md](selector.md) |
| `SelectorReference*` (восемь граней) | грани для сборки своего выбора | примитив | [selector-reference.md](selector-reference.md) |
| `SelectorDropdown` | панель списка и её части | часть | [selector-dropdown.md](selector-dropdown.md) |
| `Autocomplete` | подсказки к текстовому полю | паттерн | [autocomplete.md](autocomplete.md) |
| `MaybeAutocomplete` | то же с выключателем | паттерн | [autocomplete.md](autocomplete.md) |

## Календарь

| Имя | Назначение | Класс | Файл |
|---|---|---|---|
| `Calendar` | выбор даты, времени или диапазона | составной | [calendar.md](calendar.md) |
| `InputDateWithCalendar` | поле даты со всплывающим календарём | составной | [calendar.md](calendar.md), [input-date-file.md](input-date-file.md) |

## Оверлеи

| Имя | Назначение | Класс | Файл |
|---|---|---|---|
| `Modal`, `MaybeModal` | модальное окно по центру экрана | примитив | [modal.md](modal.md) |
| `Popover`, `MaybePopover` | всплывающая панель у якоря; основа других оверлеев | примитив | [popover.md](popover.md) |
| `PopoverBoundary`, `PopoverBoundaryReset` | невидимая граница для всплывающих панелей | технический слой | [popover.md](popover.md) |
| `FloatingArrow` | стрелка от панели к якорю | часть | [popover.md](popover.md) |
| `Tooltip`, `MaybeTooltip` | подсказка | составной | [tooltip.md](tooltip.md) |
| `Menu` | выпадающее или контекстное меню | составной | [menu.md](menu.md) |
| `MenuHeader`, `MenuItem`, `MenuFooter`, `MenuDivider`, `MenuCustomSubmenu` | части меню | часть | [menu.md](menu.md) |
| `Offcanvas`, `MaybeOffcanvas` | боковая панель | примитив | [offcanvas.md](offcanvas.md) |
| `OffcanvasHeader`, `OffcanvasBody`, `OffcanvasOutside` | части боковой панели | часть | [offcanvas.md](offcanvas.md) |
| `AutumnNotificationComponent` | карточка уведомления | составной | [notifications.md](notifications.md) |
| `AutumnNotificationsToastsComponent` | стопка тостов в углу экрана | паттерн | [notifications.md](notifications.md) |
| `AutumnNotificationsCenterComponent` | центр уведомлений; сейчас ничего не показывает | технический слой | [notifications.md](notifications.md) |

## Отображение

| Имя | Назначение | Класс | Файл |
|---|---|---|---|
| `Avatar` | круглый портрет | примитив | [avatar.md](avatar.md) |
| `Callout`, `CalloutTitle`, `CalloutText`, `CalloutDivider` | врезка, привлекающая внимание | составной | [callout.md](callout.md) |
| `Loader` | круговой индикатор загрузки | примитив | [loader.md](loader.md) |
| `Text` | текст с простой разметкой | примитив | [text-icon.md](text-icon.md) |
| `Icon` | иконка | примитив | [text-icon.md](text-icon.md) |
| `Lightbox` | полноэкранная галерея | паттерн | [lightbox.md](lightbox.md) |
| `ImageEditorView` | просмотр изображения с масштабом и поворотом | составной | [image-editor.md](image-editor.md) |
| `VideoPlayerView` | видеоплеер | составной | [video.md](video.md) |
| `BSOD` | экран фатального сбоя | паттерн | [bsod.md](bsod.md) |
| `TablePager` | постраничная навигация | составной | [table-pager.md](table-pager.md) |

## Технический слой

Публичные имена без своего вида. Отдельных спецификаций нет.

| Имя | Что делает |
|---|---|
| `Portal`, `MaybePortal`, `PortalContainer` | выносят оверлеи на верхний слой страницы, чтобы их не обрезало окружение |
| `AutumnList`, `AutumnListSpacer` | движок списков: постраничный и бесконечный вывод строк; строки рисует приложение; используется вместе с [TablePager](table-pager.md) |
| `makeAutumnNotifications`, `AutumnNotification`, `makeAutumnNotification` | служба уведомлений и описание уведомления; видимая часть — [notifications.md](notifications.md) |
| `ErrorBoundary` | при сбое части приложения показывает [BSOD](bsod.md) |
| `ModalControl`, `ModalShowHideReason` | управление показом модального окна |
| Модули карточек `AutumnCard*` | отслеживают состояния редактирования и загрузки карточки |
| Модуль `polymorphic` | позволяет выбрать роль элемента без смены вида |
| Табличная часть | пустая заглушка, виджета нет |
| Описания условий и наборы слов `TagFilter` | данные для [TagFilter](tag-filter.md) |
| Языковые наборы `Selector`, `Lightbox`, `Calendar`, `TablePager` | тексты интерфейса |

## Устаревшее

| Имя | Замена |
|---|---|
| `ButtonGroupChecks` | `ButtonGroup` с `mode="multi"` |
| `ButtonGroupRadios` | `ButtonGroup` с `mode="single"` |
| `InfiniteList`, `InfiniteListSpacer`, `StaticTable`, `InfiniteTable` | `AutumnList` |
| Прежние `BSOD` и `ErrorBoundary` | текущие `BSOD` и `ErrorBoundary` |
| `SplashLoader` | замены нет |
| `SelectorInputControl`, `SelectorButtonControl`, `SelectorLangDefaultRu` | `SelectorInput`, `SelectorButton`, текущий языковой набор |

## Зависимости

| Виджет | Построен на |
|---|---|
| `InputNumber` | `InputText` |
| `InputMoney` | `InputNumber` |
| `InputDate`, `InputFile` | `InputText` |
| `SelectorInput`, `SelectorButton`, `SelectorTag` | `Selector` и грани `SelectorReference*` |
| `TagList` | `Tag` |
| `TagInput` | `TagList` и текстовое поле |
| `TagFilter` | `Tag`, текстовое поле, `Autocomplete`, `Calendar`, `Selector` |
| `Tooltip`, `Menu`, `Autocomplete` | `Popover` |
| `Lightbox` | `Modal`, `ImageEditorView`, `VideoPlayerView` |
| Карточка уведомления | `Button`, `Text`, `Icon` |
| `InputGroup` | поля, выбор из списка, кнопки, чекбоксы |
