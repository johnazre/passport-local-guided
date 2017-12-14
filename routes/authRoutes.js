var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

/*
Three things need to be in this file:
  - Declaration of passport-local middleware for the 'login/sign in' route
  - Signup route
    - DOES contain logic to hash the password for the new user.
    - DOES NOT contain passport
    - SHOULD validate that:
      - Email and Password are both included in req.body
      - Email is unique via knex query
  - Sign in / Login route
    - Middleware should be inserted as the second parameter in the route declaration. (Before the route handler function)
    - Should respond with 'res.json' containing at least the user object, minus the password.
*/


module.exports = router
