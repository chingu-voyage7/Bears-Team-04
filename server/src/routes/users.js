const router = require('express').Router()
const AuthenticationPolicy = require('../policies/AuthenticationPolicy')
const AuthenticationController = require('../controllers/AuthenticationController')

router.post('/register',
  AuthenticationPolicy.register,
  AuthenticationController.register
)

module.exports = router
