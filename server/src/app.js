const config = require('./config/config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const logger = require('tracer').colorConsole({
  filters: [
    colors.underline, colors.green,
    {
      warn: colors.yellow,
      error: [ colors.red, colors.bold ]
    }
  ]
})

const app = express()

mongoose.connect(config.database, { useNewUrlParser: true })
  .then(() => {
    logger.info(`Connected to DB: ${config.database}`)
  })
  .catch(e => {
    logger.error({
      message: 'Failed to connect to DB',
      error: e.message
    })
  })

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

require('./routes')(app)

app.listen(config.port, () => {
  logger.info(`CORS-enabled web server listening on port ${config.port}`)
})
