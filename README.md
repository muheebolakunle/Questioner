# Questioner
Questioner​​ is a fullstack application that helps the meetup organizer prioritize  questions to be answered during meetup. Other users can vote on asked questions and they bubble to the top  or bottom of the log. 

 [![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/muheebolakunle/Questioner) [![Build Status](https://travis-ci.com/muheebolakunle/Questioner.svg?branch=develop)](https://travis-ci.com/muheebolakunle/Questioner) [![Coverage Status](https://coveralls.io/repos/github/muheebolakunle/Questioner/badge.svg?branch=develop)](https://coveralls.io/github/muheebolakunle/Questioner?branch=develop) [![Heroku](https://heroku-badge.herokuapp.com/?app=kunlexyquestioner&style=flat&svg=1&root=api/v1)](https://kunlexyquestioner.herokuapp.com/api/v1/)

 ## Questioner API

The application's front-end is hosted on gh-pages [here](https://muheebolakunle.github.io/Questioner/UI)

Version 1 (v1) of the Questioner API is hosted on Heroku at: [https://kunlexyquestioner.herokuapp.com/api/v1](https://kunlexyquestioner.herokuapp.com/api/v1/) and has the following endpoints:

### Meetup Endpoints

| Endpoint                 | Request Method | Parameters  | Action                                |
| ------------------------ |:--------------:| :----------:| :------------------------------------:|
| /api/v1/meetups          | POST           |             | Allows an admin to create meetups     |
| /api/v1/meetups          | GET            |             | Allows an admin get all meetups       |
| /api/v1/meetups/upcoming | GET            |             | Allows a user get all upcoming meetups|
| /api/v1/meetups/:id      | GET            |  meetup id  | Allows a user get a single meetup     |
| /api/v1/meetups/:id/rsvps| POST           |  meetup id  | Allows a user respond to a meetup     |                

### Question Endpoints

| Endpoint                      | Request Method | Parameters  | Action                                |
| ------------------------------| :------------: |:-----------:| :-----------------------------------: |
| /api/v1/questions             | POST           |             | Allows a user create a question       |
| /api/v1/questions             | GET            |             | Allows a user get all questions       |
| /api/v1/questions/:id         | GET            | question id | Allows a user get a single question   |
| /api/v1/questions/:id/upvote  | PATCH          | question id | Allows a user upvote a question       |
| /api/v1/questions/:id/downvote| PATCH          | question id | Allows a user downvote a question     |                

***
### Tools

> Frontend (UI)
 - HTML for webpage layout
 - CSS for styling
 - Javascript for dynamic behaviour

> Backend (api)
 - Node js for server-side logic
 - Express for routing
 - Babel for transpiling source code

> Test Driven Development (TDD)
 - Mocha and Chai for testing api routes
 - Chai-http for simulating http calls

> Continuous Integration
 - Travis CI for automated testing
 - Codeclimate for code quality report
 - Coveralls for test coverage
