const { createUser } = require('./controllers/users');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({
      message: 'Hello world !'
    })
  })

  app.get('/register', (req, res) => {
    let data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    }
     
    createUser(data).then((user) => {
      res.json(user)
    })
      .catch(err => res.send(err))
  })
}
