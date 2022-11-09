var express = require('express')
var router = express.Router()

//var express = router.Router()

router.get('/', (req, res, next) => {
  res.send({ message: 'Hello from server!' })
})

module.exports = router
