const router = require('express').Router()
const AuthenticationPolicy = require('../policies/AuthenticationPolicy')
const AuthenticationController = require('../controllers/AuthenticationController')

router.post('/register',
  AuthenticationPolicy.register,
  AuthenticationController.register
)

router.post('/login', function (req, res) {
  res.send(req.body)
})

module.exports = router
