const express = require('express')
var app = express()

app.get('/read-users-details', (req, res) => {
  var userDeets = {
    id: 10,
    name: 'Rozzy',
    age: 22,
    status: 'complicated',
  }

  res.send(userDeets)
})

app.get('/read-users', (req, res) => {
  res.send('List of Users')
})

app.listen(3000)
