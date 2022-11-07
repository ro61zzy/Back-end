//let's call one our modules
var invoices = require('./modules/invoices') // of function
var user = require('./modules/users') //of variable
var orders = require('./modules/orders')

//userActive = 2
console.log(user.userActive)
invoices.invoices()
//to import a class
var hi = new orders.orders()
hi.setOrderId(15)
