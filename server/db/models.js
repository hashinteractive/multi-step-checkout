const mongoose = require('mongoose')
const db = require('./config')
const { Schema } = mongoose

const userSchema = new Schema({
  id: Schema.Types.ObjectId,
  first: {
    type: String,
    default: ''
  },
  last: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  address: {
    route: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: ''
    },
    zip: {
      type: Number,
      default: 54321 
    },
    phone: {
      type: Number,
      default: 5555555555
    }
  },
  card: {
    number: {
      type: Number,
      default: 4111111111111111
    },
    expires: {
      type: Date,
      default: Date.now
    },
    cvv: {
      type: Number,
      default: 123
    },
    zip: {
      type: Number,
      default: 54321
    }
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }