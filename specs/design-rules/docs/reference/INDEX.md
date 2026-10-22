---
title: Референс-примеры экранов
summary: Пять разобранных экранов A и B: разбор словами (screen.md) и эталонный код (context.md) для точных значений.
---
Разбор экрана словами и эталонный код для точных значений. Это иллюстративный
приклад, а не правила: при расхождении верна документация
[правил](../INDEX.md).

| Папка | Проект | Экран | Дополняет |
|---|---|---|---|
| [b-point-codes](b-point-codes/INDEX.md) | B | Point Codes — список | [list-page.md](../page-archetypes/list-page.md), [tables-and-lists.md](../patterns/tables-and-lists.md) |
| [b-signalling-add-component](b-signalling-add-component/INDEX.md) | B | Signalling — Add component — форма | [form-page.md](../page-archetypes/form-page.md), [forms.md](../patterns/forms.md) |
| [a-routing-configurations-list](a-routing-configurations-list/INDEX.md) | A | Routing Configurations / Table — список конфигураций | [list-page.md](../page-archetypes/list-page.md), [navigation.md](../patterns/navigation.md) |
| [a-routing-configuration-blocks](a-routing-configuration-blocks/INDEX.md) | A | Routing Configurations / Table — конфигурация (блоки) | [detail-page.md](../page-archetypes/detail-page.md), [tables-and-lists.md](../patterns/tables-and-lists.md) |
| [a-routing-rules-avp](a-routing-rules-avp/INDEX.md) | A | Routing Configurations / Rules / AVP — правило | [detail-page.md](../page-archetypes/detail-page.md), [forms.md](../patterns/forms.md) |

## Как читать

1. Сначала — профильное правило в [page-archetypes](../page-archetypes/INDEX.md)
   или [patterns](../patterns/INDEX.md).
2. Затем — `screen.md` нужного экрана: он объясняет, как правило выглядит в
   макете.
3. Для точных чисел (пиксели, цвета, шрифты) — `context.md` рядом.

## Что внутри

На каждый экран — подпапка с двумя файлами:

- `screen.md` — разбор экрана словами: назначение, схема компоновки (ASCII),
  оболочка, регионы, компоненты по именам, тексты, что экран иллюстрирует.
- `context.md` — эталонный код экрана в fenced-блоке `tsx`. Это сырой код, снятый
  из макетов: точные размеры, цвета, шрифты и тексты «как есть», без правок.

## Ограничения

- Это не production-код и не «чистый HTML/CSS». Разметка передаёт размеры, цвета,
  шрифты и текст, но не является вёрсткой, готовой к запуску. Читать её надо как
  справочник значений, а не как готовый код.
- Иконки и картинки в `context.md` не имеют внешних ссылок. Иконки описаны в
  `screen.md` по имени и размеру.
- Часть слоёв скрыта автором макета: реальные состояния и часть кнопок в кадре
  могут отсутствовать. Это отмечено в `screen.md`.
- Тексты — черновые. Значения вроде `Config_Alpha`, `Config_05`,
  `Placeholder` — это демо-данные макета, а не требования к контенту. Нормативные
  тексты и форматы — в [content.md](../content.md).
- При расхождении между этой папкой и правилами верна документация правил.

## Служебный статус

`context.md` — осознанное исключение из правила каталога «без кода»: код в
fenced-блоке `tsx`. Исключение сделано только для этой папки и только ради
наглядного эталона. Файлы `screen.md` — обычный текст каталога (русский, без
кода).
