const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChannelSchema = mongoose.Schema(
  {
    name: { type: String, required: true, index: { unique: true } },
    admin: { type: Schema.Types.ObjectId, ref: 'User' },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  }
)

module.exports = mongoose.model('User', ChannelSchema)
