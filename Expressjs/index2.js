//modular approach using routers to manage the multiple routing requests of a big app
//eg an ecommerce app will have multiple requests eg users, products, reviews, items, images etc etc
//to manage all this we can't have different paths on the same file since the code will get messy
//let's bring in the concept of routers

const express = require('express')

//to bring in the routes/modules we've created
var products = require('./routes/products')
var users = require('./routes/users')
var orders = require('./routes/orders')

var app = express()
//to use them
app.use('/products', products)
app.use('/users', users)
app.use('/orders', orders)

app.listen(3000)
