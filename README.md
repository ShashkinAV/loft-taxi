# Клиент приложения для заказа такси


Доступный функционал: авторизация, заполнение "платежных" данных, запрос на построение маршрута по заданным адресам, построение маршрута на карте. Адреса и данные для авторизации заданы на сервере. Флаг авторизации и "платежные" данные сохраняются в localstorage.

## Вся логика, редьюсеры, саги покрыты unit-тестами.

[Посмотреть на Heroku](https://lofttaxi.herokuapp.com/)


### Данные для авторизации:

- Логин: test@test.com
- Пароль: 123123

## Технологии
  1. create-react-app
  2. React.js
  3. react-router
  4. Redux
  5. redux-saga
  6. Redux Form
  7. Material UI
  8. redux-actions
  9. CSS-modules
  10. Jest
  11. Mapbox API
  
## Старт проекта

[Сервер](https://loft-taxi.glitch.me/) для этого проекта - удаленный на сервисе [glitch](https://glitch.com/).

Склонируйте репозиторий и перейдите в папку проекта
git clone https://github.com/ShashkinAV/loft-taxi

Установите модули локально
npm install | yarn install

Запустите сборку проекта. По умолчанию проект откроется на http://localhost:3000/
npm start | yarn start
