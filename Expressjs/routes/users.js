const express = require('express')
var router = express.Router()

//Let's create a dynamic route
router.get('/user-details/:id', (req, res) => {
  res.send("To get a specific user's details " + req.params.id)
})

router.get('/user-details/:state/:city', (req, res) => {
  res.send(
    "To get user's location: " + req.params.state + ' ' + req.params.city
  )
})

//Let's use regex to create dynamic routes
router.get('/search/:key([0-9]{4})', (req, res) => {
  res.send('Data captured is: ' + req.params.key)
})

//wildcard expression, for when value doesn't match
router.get('*', (req, res) => {
  res.send('URL not found')
})

router.post('/create-users', (req, res) => {
  res.send('List of Users')
})
// path will be /users/update-users/
router.put('/update-users', (req, res) => {
  res.send('List of Users')
})

router.get('/', (req, res) => {
  var userDeets = {
    id: 10,
    name: 'Rozzy',
    age: 22,
    status: 'complicated',
  }
  res.send(userDeets)
})

router.get('/read-users', (req, res) => {
  res.send('List of Users')
})

router.delete('/delete-users', (req, res) => {
  res.send('List of Users')
})

module.exports = router
