const Channel = require('../models/Channel')

module.exports = {
  addChanel (req, res) {
    Channel.create(req.body)
      .then(channel => {
        res.status(200).send('channel added')
      })
      .catch(e => res.status(400).send(e.stack))
  }
}
