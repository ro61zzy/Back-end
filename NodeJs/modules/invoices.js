//with a function
var pages = require('./global')

var invoices = () => {
  console.log('this is a module for invoices')
  console.log('Page Count Value: ' + pages.pageCount)
}

//let's export so that it is possible to call, using module.exports.(you can call it any name)
module.exports.invoices = invoices

//lets call this invoice in our app.js
