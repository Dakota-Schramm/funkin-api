// bodyParser -helps to parse the request and create the req.body object
// cors - express middleware for CORS

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

var corsOptions = {
  origin: 'http://localhost:8081',
}
app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.get('/', (req, res) => {
  res.json({ message: '3, 2, 1, go!' })
})
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/query.routes')

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server up and funkin' on port ${PORT}.`)
})
