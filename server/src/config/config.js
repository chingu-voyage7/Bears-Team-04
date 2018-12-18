// require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8081,
  database: process.env.MONGODB_URI || 'mongodb://localhost/bears04',
  jwtPrivateKey: process.env.JWT_PRIVATE || 'private super secret key'
}
