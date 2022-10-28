var express = require('express')
var app = express()

app.get('/getUsers', (req, res) => {
  res.send('Welcome to express')
})

app.get('/getTrained', (req, res) => {
  var giveTrainingObj = {
    trainee: 'name',
    game: 'boxing',
    number: 4,
  }

  res.send(giveTrainingObj)
})

app.listen(4000)
