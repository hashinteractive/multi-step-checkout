const mongoose = require('mongoose')
const db = require('./config')
const { Schema } = mongoose

const userSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  address: {
    route: String,
    city: String,
    state: String,
    zip: Number,
    phone: Number
  },
  card: {
    number: Number,
    expires: Date,
    cvv: Number,
    zip: Number
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }