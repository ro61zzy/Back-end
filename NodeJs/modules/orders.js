//with class
class orders {
  setOrderId(id) {
    console.log('Order id is : ' + id)
  }

  showOrders() {}
}

//we export with module.exports.classname
module.exports.orders = orders
