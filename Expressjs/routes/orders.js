const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.send('hallow')
})

router.listen(3000)
