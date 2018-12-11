const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = {
  /**
   * create a user
   * @function
   * @name createUser
   * @param  {object} data - a user input data
   * @return {object} return a user object
   */
  createUser (data) {
    return bcrypt.hash(data.password, 10)
      .then((hash) => new User({
        email: data.email,
        password: hash,
        userName: data.userName,
        firstName: data.firstName,
        lastName: data.lastName
      }))
      .catch(e => { throw e })
  }
}
