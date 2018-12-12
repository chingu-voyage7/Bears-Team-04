const router = require('express').Router()
const AuthenticationController = require('../controllers/AuthenticationController')

const { body, validationResult } = require('express-validator/check')

const registerCheck = [
  body('email').exists().isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 })
]

router.post('/register', registerCheck,
  function validationHandler (req, res, next) {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    } else {
      next()
    }
  },
  AuthenticationController.register
)

module.exports = router
