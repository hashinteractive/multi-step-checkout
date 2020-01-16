const { Router } = require('express')
const router = Router()
const userRoutes = require('./user')

router.get('/', (req, res, next) => {
  res.send("You have reached the /api route")
})

router.use('/user', userRoutes)

module.exports = router