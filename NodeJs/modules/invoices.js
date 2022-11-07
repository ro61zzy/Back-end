//with a function
var invoices = () => {
  console.log('this is a module for invoices')
}

//let's export so that it is possible to call, using module.exports.(you can call it any name)
module.exports.invoices = invoices

//lets call this invoice in our app.js
