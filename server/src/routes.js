const { body, validationResult } = require('express-validator/check')
const { createUser } = require('./controllers/users')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({
      message: 'Hello world !'
    })
  })
  // /////REGISTER USER//////////////////
  const registerCheck = [
    body('email').exists().isEmail().normalizeEmail(),
    body('password').isLength({ min: 8 })
  ]
  app.get('/register', registerCheck, (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    let data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    }
    createUser(data).then((user) => {
      res.json(user)
    })
      .catch(err => res.send(err))
  })
}
