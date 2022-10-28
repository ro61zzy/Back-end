const express = require('express')
var router = express.Router()

//path will be /products/
router.get('/', (req, res) => {
  res.send('Get Requests for Products')
})

//path will be /products/get-product-details
router.get('/get-product-details', (req, res) => {
  res.send('Get Requests for Product Details')
})

module.exports = router
