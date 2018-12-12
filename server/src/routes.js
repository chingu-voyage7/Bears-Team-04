const authenticationRoutes = require('./routes/users')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({
      message: 'Hello world !'
    })
  })

  app.use(authenticationRoutes)
}
