const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChannelSchema = mongoose.Schema(
  {
    name: { type: String, required: true, index: { unique: true } },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  }
)

module.exports = mongoose.model('Channel', ChannelSchema)
