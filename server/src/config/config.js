// require('dotenv').config()

module.exports = {
  port: process.env.PORT || 8081,
  database: process.env.MONGODB_URI || 'mongodb://localhost/bears04'
}
