const { Router } = require('express')
const router = Router()
const { User } = require('../db/models')

router.get('/', (req, res, next) => {
  res.send("User Route")
})

router.post('/', async (req, res, next) => {
  const { body } = req
  const userInstance = new User(body)
  try{
    let user = await userInstance.save()
    res.status(201).json(user)
  }catch(err){
    console.log(err)
    next(err)
  }
})

router.patch('/', async (req, res, next) => {
  const { body: user } = req
  console.log(user)
  try{
    let updated = await User.findByIdAndUpdate(user._id, user, {new: true})
    console.log(updated)
    res.status(200).json(updated)
  }catch(err){
    console.log(err)
    next(err)
  }
})

module.exports = router