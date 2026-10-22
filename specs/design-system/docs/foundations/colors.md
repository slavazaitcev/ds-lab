---
title: "Палитра: примитивы, семантические роли, роли виджетов"
summary: "Все цвета дизайн-системы: шкалы примитивов, семантические роли и роли виджетов с hex по темам."
read_when:
  - нужен hex примитива или семантической роли
  - выбираете цвет для текста, фона, рамки или валидации
keywords: [палитра, color, токены, tokens, primitive, gray, light-blue, blue-gray]
related: [./themes.md, ../glossary.md]
---
## Назначение

Задаёт все цвета дизайн-системы. Цвета организованы в три уровня:

1. **Примитивы** — исходные цвета палитры (шкалы оттенков и одиночные цвета).
2. **Семантические роли** — цвета по смыслу: текст, фон, рамка, акцент,
   валидация.
3. **Роли виджетов** — цвет конкретной части конкретного виджета в конкретном
   состоянии. Именно этими ролями окрашены виджеты.

## Значения

### Примитивы

138 примитивов: 13 шкал оттенков и 4 одиночных цвета.

| Шкала | Ступени | Число ступеней |
|---|---|---|
| gray | 10, 20 … 100 | 10 |
| light-blue | 10, 20 … 100 | 10 |
| red | 10, 20 … 100 | 10 |
| green | 10, 20 … 100 | 10 |
| purple | 10, 20 … 100 | 10 |
| info | 10, 20 … 100 | 10 |
| yellow | 10, 20 … 110 | 11 |
| blue-gray | 10, 20 … 130 | 13 |
| blue-dark | 10, 20 … 100 | 10 |
| red-dark | 10, 20 … 100 | 10 |
| green-dark | 10, 20 … 100 | 10 |
| yellow-dark | 10, 20 … 100 | 10 |
| info-dark | 10, 20 … 100 | 10 |

| Одиночный цвет | Значение |
|---|---|
| white | `#FFFFFF` |
| black | `#000000` |
| overlay | `#01070E` |
| pink | `#D63384` |

Значения ступеней:

| Примитив | Значение |
|---|---|
| gray 10 | `#ECEDEF` |
| gray 20 | `#DEE0E3` |
| gray 30 | `#C5C9CD` |
| gray 40 | `#B0B4BA` |
| gray 50 | `#9298A0` |
| gray 60 | `#79818B` |
| gray 70 | `#5F6772` |
| gray 80 | `#46505D` |
| gray 90 | `#2E3948` |
| gray 100 | `#141F2F` |
| light-blue 10 | `#EFF5FE` |
| light-blue 20 | `#DFEBFD` |
| light-blue 30 | `#CEE1FC` |
| light-blue 40 | `#BED6FB` |
| light-blue 50 | `#AECCF9` |
| light-blue 60 | `#9EC2F8` |
| light-blue 70 | `#8EB8F7` |
| light-blue 80 | `#7DAEF6` |
| light-blue 90 | `#6DA4F5` |
| light-blue 100 | `#5D9AF4` |
| red 10 | `#FCE9EC` |
| red 20 | `#FAD2D9` |
| red 30 | `#F8BCC7` |
| red 40 | `#F5A5B4` |
| red 50 | `#F28EA1` |
| red 60 | `#F0788E` |
| red 70 | `#EE627B` |
| red 80 | `#EB4B69` |
| red 90 | `#E83556` |
| red 100 | `#E61E43` |
| green 10 | `#E9F7EF` |
| green 20 | `#D4EFDF` |
| green 30 | `#BEE7CF` |
| green 40 | `#A9DFBF` |
| green 50 | `#93D6AF` |
| green 60 | `#7DCEA0` |
| green 70 | `#68C690` |
| green 80 | `#52BE80` |
| green 90 | `#3DB670` |
| green 100 | `#27AE60` |
| purple 10 | `#F6F1FD` |
| purple 20 | `#ECE3FB` |
| purple 30 | `#E3D5F9` |
| purple 40 | `#DAC7F7` |
| purple 50 | `#D0B9F5` |
| purple 60 | `#C7ABF3` |
| purple 70 | `#BE9DF1` |
| purple 80 | `#B58FEF` |
| purple 90 | `#AB81ED` |
| purple 100 | `#A273EB` |
| info 10 | `#E6FAFE` |
| info 20 | `#CDF5FD` |
| info 30 | `#B4F0FC` |
| info 40 | `#9BEBFA` |
| info 50 | `#82E6F9` |
| info 60 | `#68E0F8` |
| info 70 | `#50DCF7` |
| info 80 | `#36D6F5` |
| info 90 | `#1ED2F5` |
| info 100 | `#04CCF3` |
| yellow 10 | `#FFF5D6` |
| yellow 20 | `#FDEEBE` |
| yellow 30 | `#FEEAAA` |
| yellow 40 | `#FEE495` |
| yellow 50 | `#FDDF82` |
| yellow 60 | `#FDDB6D` |
| yellow 70 | `#FDD454` |
| yellow 80 | `#FCCF40` |
| yellow 90 | `#FCC51D` |
| yellow 100 | `#F1B704` |
| yellow 110 | `#D4A104` |
| blue-gray 10 | `#142130` |
| blue-gray 20 | `#172333` |
| blue-gray 30 | `#192637` |
| blue-gray 40 | `#1C283A` |
| blue-gray 50 | `#1E2B3E` |
| blue-gray 60 | `#212E41` |
| blue-gray 70 | `#233045` |
| blue-gray 80 | `#263348` |
| blue-gray 90 | `#28364C` |
| blue-gray 100 | `#2A384F` |
| blue-gray 110 | `#32435F` |
| blue-gray 120 | `#3A4E6E` |
| blue-gray 130 | `#435A7F` |
| blue-dark 10 | `#172537` |
| blue-dark 20 | `#1C2C42` |
| blue-dark 30 | `#21334D` |
| blue-dark 40 | `#263A58` |
| blue-dark 50 | `#2C4162` |
| blue-dark 60 | `#31486D` |
| blue-dark 70 | `#364F78` |
| blue-dark 80 | `#3B5683` |
| blue-dark 90 | `#405D8E` |
| blue-dark 100 | `#456499` |
| red-dark 10 | `#352E44` |
| red-dark 20 | `#483045` |
| red-dark 30 | `#5D3048` |
| red-dark 40 | `#713149` |
| red-dark 50 | `#85314C` |
| red-dark 60 | `#98324E` |
| red-dark 70 | `#AC3350` |
| red-dark 80 | `#C13352` |
| red-dark 90 | `#D43554` |
| red-dark 100 | `#E83556` |
| green-dark 10 | `#223A45` |
| green-dark 20 | `#224847` |
| green-dark 30 | `#23544B` |
| green-dark 40 | `#24624D` |
| green-dark 50 | `#246E51` |
| green-dark 60 | `#247A54` |
| green-dark 70 | `#258857` |
| green-dark 80 | `#26945A` |
| green-dark 90 | `#26A25D` |
| green-dark 100 | `#27AE60` |
| yellow-dark 10 | `#363B3B` |
| yellow-dark 20 | `#4A4A35` |
| yellow-dark 30 | `#5F572F` |
| yellow-dark 40 | `#746529` |
| yellow-dark 50 | `#897223` |
| yellow-dark 60 | `#9E801C` |
| yellow-dark 70 | `#B38E17` |
| yellow-dark 80 | `#C89B10` |
| yellow-dark 90 | `#DCAA0B` |
| yellow-dark 100 | `#F1B704` |
| info-dark 10 | `#1E3D53` |
| info-dark 20 | `#1B4E65` |
| info-dark 30 | `#185D77` |
| info-dark 40 | `#166E88` |
| info-dark 50 | `#137D9A` |
| info-dark 60 | `#0F8CAC` |
| info-dark 70 | `#0D9DBE` |
| info-dark 80 | `#0AACCF` |
| info-dark 90 | `#07BDE2` |
| info-dark 100 | `#04CCF3` |

### Семантические роли

31 роль.

| Группа | Роли |
|---|---|
| Интенты | `primary`, `success`, `danger`, `warning`, `info`; у каждого три роли: `*-text-emphasis`, `*-bg-subtle`, `*-border-subtle` |
| Поверхности и текст | `text-color`, `secondary-text-color`, `tertiary-text-color`, `background-color`, `secondary-background-color`, `tertiary-background-color`, `border-color` |
| Ссылки | `link-text-color`, `link-text-color` в состоянии hover |
| Валидация | `is-valid-color`, `is-invalid-color`, `is-warning-color` и их светлые вторичные оттенки |
| Прочее | `code-text-color` |

| Группа | Роль | Light | Dark |
|---|---|---|---|
| Интенты | `primary-text-emphasis` | `#253E62` | `#9EC2F8` |
| Интенты | `primary-bg-subtle` | `#DFEBFD` | `#131F31` |
| Интенты | `primary-border-subtle` | `#BED7FB` | `#385C92` |
| Интенты | `success-text-emphasis` | `#104626` | `#7DCEA0` |
| Интенты | `success-bg-subtle` | `#D4EFDF` | `#082313` |
| Интенты | `success-border-subtle` | `#A9DFBF` | `#17683A` |
| Интенты | `danger-text-emphasis` | `#5C0C1B` | `#F0788E` |
| Интенты | `danger-bg-subtle` | `#FAD2D9` | `#2E060D` |
| Интенты | `danger-border-subtle` | `#F5A5B4` | `#8A1228` |
| Интенты | `warning-text-emphasis` | `#604902` | `#F7D468` |
| Интенты | `warning-bg-subtle` | `#FCF1CD` | `#302401` |
| Интенты | `warning-border-subtle` | `#F9E29B` | `#916E02` |
| Интенты | `info-text-emphasis` | `#025261` | `#68E0F8` |
| Интенты | `info-bg-subtle` | `#CDF5FD` | `#012931` |
| Интенты | `info-border-subtle` | `#9BEBFA` | `#027A92` |
| Поверхности и текст | `text-color` | `#141F2F` | `#FFFFFF` |
| Поверхности и текст | `secondary-text-color` | `#5F6772` | `#C5C9CD` |
| Поверхности и текст | `tertiary-text-color` | `#141F2F`, непрозрачность 50 % | `#FFFFFF`, непрозрачность 50 % |
| Поверхности и текст | `background-color` | `#FFFFFF` | `#142130` |
| Поверхности и текст | `secondary-background-color` | `#ECEDEF` | `#1E2B3E` |
| Поверхности и текст | `tertiary-background-color` | `#141F2F` | `#2A3034` |
| Поверхности и текст | `border-color` | `#ECEDEF` | `#1E2B3E` |
| Ссылки | `link-text-color` | `#5D9AF4` | `#9EC2F8` |
| Ссылки | `link-text-color` (hover) | `#4A7BC3` | `#B1CEF9` |
| Валидация | `is-valid-color` | `#27AE60` | `#27AE60` |
| Валидация | `is-valid-secondary-color` | `#E9F7EF` | `#223A45` |
| Валидация | `is-invalid-color` | `#E61E43` | `#E83556` |
| Валидация | `is-invalid-secondary-color` | `#FCE9EC` | `#352E44` |
| Валидация | `is-warning-color` | `#F1B704` | `#F1B704` |
| Валидация | `is-warning-secondary-color` | `#FFF5D6` | `#363B3B` |
| Прочее | `code-text-color` | `#D63384` | `#E685B5` |

### Роли виджетов

Около 1 400 ролей. Имя строится по схеме «виджет — часть — свойство», в конце
может стоять состояние после двух дефисов. Примеры:

- `btn-danger-text-color--active` — текст danger-кнопки в нажатом состоянии;
- `tooltip-description-text-color` — текст описания в подсказке;
- `autocomplete-box-shadow-color` — цвет тени панели автодополнения;
- `avatar-background-color` — фон диска аватара.

Значения ролей приведены в разделе «Цвета» спецификации каждого виджета.

### Основные значения по темам

Колонки secondary — справочные, см. [Темы](themes.md).

| Что | Light | Dark |
|---|---|---|
| Основной текст | `#141F2F` | `#FFFFFF` |
| Вспомогательный текст | `#5F6772` | `#C5C9CD` |
| Фон страницы (primary) | `#FFFFFF` | `#142130` |
| Фон страницы (secondary, справочно) | `#ECEDEF` | `#1E2B3E` |
| Рамка по умолчанию | `#ECEDEF` | `#1E2B3E` |
| Основной акцент (синий) | `#5D9AF4` | `#5D9AF4` |
| Успех (зелёный) | `#27AE60` | `#27AE60` |
| Информация (циан) | `#04CCF3` | `#04CCF3` |
| Предупреждение (янтарный) | `#F1B704` | `#F1B704` |
| Ошибка (красный) | `#E61E43` | `#E83556` |
| Мягкая заливка primary | `#DFEBFD` | `#131F31` |
| Мягкая рамка primary | `#BED7FB` | `#385C92` |

### Особые значения

| Что | Значение |
|---|---|
| Затемнение под оверлеями | `#01070E`, непрозрачность 70 % |
| Тинт при наведении | `#172537`, непрозрачность 5 % |

## Правила применения

- **Текст меняет полярность по теме.** В light текст тёмный, в dark — светлый.
  Третий, самый бледный текст серый в обеих темах.
- **Поверхности инвертируются по теме.** В light фон белый, в dark — тёмно-синий.
- **Акценты почти не меняются.** Синий `#5D9AF4` одинаков во всех темах.
  Зелёный, циан и янтарный тоже одинаковы. Красный в dark немного теплее.
- **Мягкие оттенки вычисляются от акцента.** В light акцент смешивается с белым
  (заливка — 80 % белого, мягкая рамка — 60 % белого). В dark акцент
  смешивается с чёрным (заливка — 80 % чёрного, мягкая рамка — 40 % чёрного).
  Текст на акцентном фоне инвертируется по тому же правилу.
- **По теме меняются только цвета.** Размеры, отступы, радиусы и анимации от
  темы не зависят. Исключение — около 29 декоративных деталей, которые меняют
  картинку, а не только цвет: отметки чекбоксов и переключателей, заглушки
  миниатюр, значки вкладок-закладок.
- **Семантические роли использует базовый слой: текст и фон страницы,
  вторичный и третичный текст, ссылки, рамки по умолчанию, валидация, цвет
  кода. Виджеты окрашиваются ролями виджетов, семантические роли они не
  используют. В большинстве ролей виджетов стоит примитив напрямую; чаще
  всего — белый `#FFFFFF`.
- **Два разных «secondary».** Семантический `secondary` — нейтральный серый
  (`#5F6772` light / `#C5C9CD` dark). Интент кнопки `secondary` — бледно-синий
  `#EFF5FE`. Это разные цвета, их нельзя путать.
- **Трекинга нет.** Цветовых или типографических значений межбуквенного
  интервала нет.

## Связанные разделы

- [Темы](themes.md) — как выбирается тема и что в ней меняется.
- [Тени и глубина](elevation.md) — тени.
- [Типографика](typography.md) — текст.

## Не определено

Нет.
