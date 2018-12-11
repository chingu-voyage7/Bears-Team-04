require('dotenv').config()

console.log(process.env.PORT)

module.exports = {
  port: process.env.PORT || 8081,
  database: process.env.MONGODB_URI
}
