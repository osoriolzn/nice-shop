require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT
}

module.exports = {
  development: {
    username: config.dbUser,
    password: config.dbPassword,
    host: config.dbHost,
    database: config.dbName,
    dialect: 'postgres'
  },
  production: {
    username: config.dbUser,
    password: config.dbPassword,
    host: config.dbHost,
    database: config.dbName,
    dialect: 'postgres'
  }
}