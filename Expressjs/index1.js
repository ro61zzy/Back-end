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
//we will have to bring the concept of routers to manage the multiple parts and the multiple routings, bring in the modular approach of routers. see in index2
app.listen(3000)
