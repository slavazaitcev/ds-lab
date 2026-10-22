---
title: Цвета галереи Lightbox
summary: Цвета Lightbox — затемнение, шапка, подвал, стрелки, миниатюры, экран ошибки.
read_when:
  - нужен точный цвет фона, стрелок или миниатюр полноэкранной галереи
keywords: [Lightbox, галерея, просмотр медиа, миниатюра]
related: [./lightbox.md, ../foundations/colors.md, ../foundations/themes.md]
---
| Поле | Значение |
|---|---|
| Виджеты в файле | `Lightbox` |
| Раздел спецификации | «Цвета»; остальные разделы — в [Lightbox](lightbox.md) |

## Цвета частей

Цвета одинаковы во всех темах.

| Часть | Роль | Значение |
|---|---|---|
| Фон сцены | `lightbox-background-color` | `#01070E`, непрозрачность 88 % |
| Градиент шапки и подвала | `lightbox-header-footer-background-color-from`, `-to` | от `#01070E` 13 % до `#01070E` 45 %, размытие 5 px |
| Текст: имя, счётчик, дата | `lightbox-text-color` | `#FFFFFF` |
| Стрелка: круг в покое | `lightbox-carousel-control-background-color` | прозрачный |
| Стрелка: круг при hover и нажатии | `lightbox-carousel-control-background-color--hover`, `--active` | `#01070E` 25 %, размытие 5 px |
| Стрелка: контур фокуса | `lightbox-carousel-control-outline-color--focus-visible` | `#6DA4F5` |
| Загрузка: круг | `lightbox-carousel-loading-item-background-color` | `#46505D` 25 %, размытие 5 px |
| Загрузка: индикатор | `lightbox-carousel-loader-color` | `#9298A0` |
| Ошибка: фон | `lightbox-carousel-fallback-item-background-color` | `#192637` |
| Ошибка: иконка | `lightbox-carousel-fallback-item-icon-color` | `#46505D` |
| Ошибка: текст | `lightbox-carousel-fallback-item-text-text-color` | `#ECEDEF` |
| Миниатюра: рамка выбранной | `lightbox-thumbnail-content-border-color--active` | `#5D9AF4` |
| Миниатюра: контур фокуса | `lightbox-thumbnail-content-outline-color--focus-visible` | `#BED6FB` |
| Миниатюра-заглушка: фон | `lightbox-thumbnail-fallback-background` | `#192637` |
| Миниатюра-заглушка: иконка | `lightbox-thumbnail-fallback-icon-color` | `#46505D` |
| Миниатюра: индикатор | `lightbox-thumbnail-loader-color` | `#9298A0` |
| Миниатюра: круг индикатора | `lightbox-thumbnail-loading-background` | `#46505D` 25 % |
| Видео-метка: иконка | `lightbox-thumbnail-video-mark-text-color` | `#FFFFFF` |
| Видео-метка: круг | `lightbox-thumbnail-video-mark-background-color` | `#01070E` 25 %, размытие 5 px |

Встроенные кнопки, аватары и индикаторы всегда в тёмной теме.

## Не определено

Нет.

## Критерии соответствия

- [ ] Значения совпадают с таблицами этого файла.
