const express = require('express')
const router = express.Router()
const knex = require('../db/knex')
const bcrypt = require('bcrypt-nodejs')
const passport = require('passport')
const LocalStrategy = require('passport-local')
require('./config/auth')

/*
  File should contain the following things:
    - Creation/Declaration of the LocalStrategy
      - LocalStrategy expects a username and a password, so if you are using email like we are, in the first parameter of the LocalStrategy constructor, include this: { usernameField: 'email'}.
      - The second parameter is the callback/handler function for LocalStrategy
        - The callback takes 3 parameters: email, password, and done
        - The goal in this function is to determine one of three possible situations:
          - The user exists in the database and the password matches the hashed password associated with that user.
          - The user input the wrong username and/or password
          - There was some error along the way, which we could address using the .catch() method
    - The statement to tell passport to use the strategy you just created above, using the variable name you declared.
*/

module.exports = router
