require('./config/config')
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
const port = process.env.PORT || 8081

const app = express()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    logger.info(`Connected to DB: ${process.env.MONGODB_URI}`)
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

app.listen(port, () => {
  logger.info(`CORS-enabled web server listening on port ${port}`)
})
