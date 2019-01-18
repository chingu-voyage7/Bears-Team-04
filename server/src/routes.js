const authenticationRoutes = require('./routes/users')
const channelRoutes = require('./routes/channels')
module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({
      message: 'Hello world !'
    })
  })

  app.use(authenticationRoutes)

  app.use(channelRoutes)
}
