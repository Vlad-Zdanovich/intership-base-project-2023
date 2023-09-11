# Frontend Internship Base Project 202

Базовый проект для стажировки

# Основные ссылки
- [Дизайн банка](https://www.figma.com/file/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?node-id=33%3A35654)
- [Stoplight](https://kode-education.stoplight.io/docs/kode-bank/b3A6Mjc3NzQxNjY-get-api-core-profile)
- [Требования в Confluence](https://confa.kode.ru/display/SKIL/Skillbox-Space+Home?src=spacemenu)

# Основные команды
### Установите JS зависимости
`yarn`
### Установите Bundler
`cd ios bundle install`
### Установите поды
`bundle exec pod install`
### Или одной командой
`yarn && cd ios && bundle install && bundle exec pod install`

### Запустите metro бандлер
`yarn start`
### Запустите симулятор/эмулятор
`yarn ios` или `yarn android`

# Структура проекта

```
root
- entities // бизнес-сущности

- features // работа с данными
-- hooks

- flows // бизнес флоу
-- flow-name
--- ui // ui относящийся только к конкретному flow
---- organisms
---- molecules
---- atoms

- shared // общий код, который переиспользуется в разных flow

- ui // общие переиспользуемые компонеты
-- organisms
-- molecules
-- atoms
```
