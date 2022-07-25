const express = require('express')
const app = module.exports = express()

const { authJwt } = require('../middlewares')
const controller = require('../controllers/query.controller')

app.get('/scores', controller.allScores)
app.get('/scores/:userid', controller.scoresFromUsers)
app.get('/users', controller.allUsers)
app.get('/songs', controller.allSongs)