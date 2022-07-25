const express = require('express')
const app = module.exports = express()

const { verifySignUp } = require('../middlewares')
const controller = require('../controllers/auth.controller')

app.post('/signup', 
  [verifySignUp.checkDuplicateUsername, verifySignUp.checkRolesExisted],
  controller.signup,
)

app.post('/signin', controller.signin)
