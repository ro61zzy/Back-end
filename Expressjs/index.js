var express = require('express')
var app = express()
app.get('/getUsers', (req, res) => {
  res.send('Welcome to express')
})
app.listen(3000)
