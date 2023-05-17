const express = require('express')
const router = express.Router()

/* GET users listing route. */
router.get('/users', function (req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
