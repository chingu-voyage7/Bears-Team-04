const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    channelId: { type: Schema.Types.ObjectId, ref: 'Channel'},
    body: { type: String, required: true },
  }
)

module.exports = mongoose.model('Message', MessageSchema)