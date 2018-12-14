const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

const UserSchema = mongoose.Schema(
  {
    email: { type: String, required: true, index: { unique: true } },
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

UserSchema.pre('save', function () {
  return bcrypt.hash(this.password, SALT_ROUNDS)
    .then(hash => { this.password = hash })
    .catch(error => { throw error })
})

module.exports = mongoose.model('User', UserSchema)
