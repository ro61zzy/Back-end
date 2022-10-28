const express = require('express')
var app = express()

app.post('/create-users', (req, res) => {
  res.send('List of Users')
})

app.put('/update-users', (req, res) => {
  res.send('List of Users')
})

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

app.delete('/delete-users', (req, res) => {
  res.send('List of Users')
})

//this are so many pieces of code making it difficult to manage
//we will have to bring the concept of routers to manage the multiple
//parts and the multiple routings, bring in the modular approach of routers. see in index2
app.listen(3000)
