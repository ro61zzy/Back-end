var express = require('express')
var router = express.Router()

var express = router.Router()

router.get('/', (req, res, next) => {
  res.send('API is working properly')
})

module.exports = router
