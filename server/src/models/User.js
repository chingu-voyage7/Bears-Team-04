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

UserSchema.pre('save', function saveUserPreHook () {
  return bcrypt.hash(this.password, SALT_ROUNDS)
    .then(hash => { this.password = hash })
    .catch(error => { throw error })
})

UserSchema.methods.isSamePassword = function isSamePassword (password) {
  return bcrypt.compare(password, this.password)
    .then(match => match)
    .catch(error => { throw error })
}

module.exports = mongoose.model('User', UserSchema)
