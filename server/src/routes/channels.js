const router = require('express').Router()
const ChannelController = require('../controllers/ChannelController')

// how do we name channel related routes
router.post('/channel',
  ChannelController.addChannel
)

module.exports = router
