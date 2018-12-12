const router = require('express').Router()
const { body, validationResult } = require('express-validator/check')
const User = require('../models/User')

const registerCheck = [
  body('email').exists().isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 })
]
router.post('/register', registerCheck, (req, res) => {
  let errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  User.create(req.body).then((user) => {
    res.json(user)
  })
    .catch(err => res.send(err))
})

module.exports = router
