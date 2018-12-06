let env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  process.env.PORT = 4000
  process.env.MONGODB_URI = 'mongodb://localhost/bears04'
} else if (env === 'test') {
  process.env.PORT = 4000
  process.env.MONGODB_URI = 'mongodb://localhost/bears04Test'
}
