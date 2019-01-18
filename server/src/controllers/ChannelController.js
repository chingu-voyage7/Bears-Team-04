const Channel = require('../models/Channel')
const Message = require('../models/message')

module.exports = {
  addChanel (req, res) {
    Channel.create(req.body)
      .then(channel => {
        res.status(200).send('channel added')
      })
      .catch(e => res.status(400).send(e.stack))
  },
  showChannels (req, res) {
    Channel.find()
    .exec((err, channels) => {
      if (err) {
        res.status(500).send(err.stack)
      } else {
        res.status(200).send({ channels })
      }
    })
  },
  getChannel (req, res) {
   Channel.find({ channelId: req.params.channelId })
     .exec((err, channel) => {
       if (err) {
         res.status(500).send(err.stack)
       } else {
         res.status(200).send({ channel })
       }
     })
  }
}
