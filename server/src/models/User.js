const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  userName: { type: String, required: true },
  fistName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
},
{ timestamps: true })

const User = mongoose.model('User', UserSchema)

module.exports = User
