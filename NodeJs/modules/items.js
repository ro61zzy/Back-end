class items {
  itemCode = 10
  getItems() {
    console.log('Get All Items')
  }
  viewItem() {
    const itemVal = this.itemCode * 25
    console.log('Final Item Value' + itemVal)
    console.log('Viewing Item')
  }
}
module.exports.items = items
