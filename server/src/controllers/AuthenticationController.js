const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = {
  register (req, res) {
    User.create(req.body)
      .then(user => {
        res.send({
          token: generateUserToken(user.toJSON()),
          user: user.toJSON()
        })
      })
      .catch(error => { res.status(400).send(error) })
  },

  async login (req, res) {
    const { email, password } = req.body

    try {
      const user = await User.findOne({ email })

      if (!user || !user.isSamePassword(password)) {
        return res.status(403).send({
          error: 'The login information is incorrect'
        })
      }

      res.send({
        token: generateUserToken(user.toJSON()),
        user: user.toJSON()
      })
    } catch (error) {
      res.status(500).send({
        error: `An error has occured trying to login: ${error}`
      })
    }
  }
}

function generateUserToken (userJSON) {
  return jwt.sign(userJSON, config.jwtPrivateKey, {
    expiresIn: '7d'
  })
}
