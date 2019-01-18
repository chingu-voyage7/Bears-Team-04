const router = require('express').Router()
const ChannelController = require('../controllers/ChannelController')

// how do we name channel related routes
router.post('/channel/create',
  ChannelController.addChanel
)

router.post('/channel/:id',
  ChannelController.getChannel
)

router.get('/channel',
  ChannelController.showChannels
)

module.exports = router
