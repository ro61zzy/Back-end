//modular approach using routers to manage the multiple routing requests of a big app
//eg an ecommerce app will have multiple requests eg users, products, reviews, items, images etc etc
//to manage all this we can't have different paths on the same file since the code will get messy
//let's bring in the concept of routers

const express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('hallow')
})

app.listen(3000)
