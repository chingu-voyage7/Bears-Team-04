const User = require('../models/User')

module.exports = {
  register (req, res) {
    User.create(req.body)
      .then(user => { res.send(user.toJSON()) })
      .catch(error => { res.status(400).send(error) })
  }
}
