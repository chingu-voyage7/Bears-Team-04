const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().trim().lowercase().email({ minDomainAtoms: 2 }).required(),
      username: Joi.string().trim().lowercase().alphanum().min(3).max(30).required(),
      password: Joi.string().trim().min(8).max(30).required()
    }

    const error = Joi.validate(req.body, schema).error

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'username':
          res.status(400).send({
            error: 'Username must be a combination of 8 to 30 alphanumeric characters'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password must be a combination of 8 to 30 characters'
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration input'
          })
      }
    } else {
      next()
    }
  }
}
