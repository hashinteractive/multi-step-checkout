const { Router } = require('express')
const router = Router()
const { User } = require('../db/models')

router.get('/', (req, res, next) => {
  res.send("User Route")
})

module.exports = router