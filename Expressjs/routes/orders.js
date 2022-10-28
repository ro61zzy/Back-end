const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  var orderDeets = {
    id: 10,
    name: 'Iphone',
    model: '14',
    status: 'new',
  }
  res.send(orderDeets)
})

router.put('/update-orders', (req, res) => {
  res.send('List of Orders')
})

router.get('/read-orders', (req, res) => {
  res.send('List of Orders')
})

module.exports = router
