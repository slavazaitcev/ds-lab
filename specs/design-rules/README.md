Версия: 1.3.0

# Дизайн-код админ-приложений (референсы A и B)

Документация уровня приложения: как устроены страницы, навигация, списки и формы
и как виджеты компонуются в экраны. Набор документов оформлен для чтения
ИИ-агентами и публикуется как npm-пакет
`@protei-autumn-dev/docs-design-rules`.

**Границы ответственности.** Внутреннее устройство виджетов (анатомия, состояния,
все варианты) описано в спеке UI-кита. Здесь — только **использование**: где, в
какой роли и в каком варианте, с какими соседями. Имя компонента указывается так,
как записано в макете, — по этому имени потребитель находит виджет в спеке UI-кита.

- Точка входа — [docs/INDEX.md](docs/INDEX.md): описание набора, маршруты по
  задачам, порядок чтения, статусы утверждений.
- Основы — [docs/foundations/INDEX.md](docs/foundations/INDEX.md).
- Архетипы страниц — [docs/page-archetypes/INDEX.md](docs/page-archetypes/INDEX.md).
- Паттерны — [docs/patterns/INDEX.md](docs/patterns/INDEX.md).
- Справочники — [docs/components-usage.md](docs/components-usage.md),
  [docs/content.md](docs/content.md), [docs/divergences.md](docs/divergences.md).
- Референс-примеры — [docs/reference/INDEX.md](docs/reference/INDEX.md).
- Журнал изменений — [CHANGELOG.md](CHANGELOG.md).
