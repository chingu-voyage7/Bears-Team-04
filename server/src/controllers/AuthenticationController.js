const User = require('../models/User')

module.exports = {
  register (req, res) {
    User.create(req.body)
      .then(user => { res.send(user.toJSON()) })
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

      // TODO: persist user session by also sending access token
      res.send(user.toJSON())
    } catch (error) {
      res.status(500).send({
        error: `An error has occured trying to login: ${error}`
      })
    }
  }
}
