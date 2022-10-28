const express = require('express')
var router = express.Router()

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
