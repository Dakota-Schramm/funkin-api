const express = require('express')
var router = express.Router();

app.get('/', (req, res) => {
  res.json({ message: '3, 2, 1, go!' })
})


module.exports = router;
