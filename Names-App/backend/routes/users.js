var express = require('express')
var router = express.Router()

/* GET users listing. */
router.post('/details', function (req, res, next) {
  const details = new Details({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    location: req.body.location,
  })

  details.save()
})

module.exports = router
