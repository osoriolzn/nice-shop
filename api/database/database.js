const { Sequelize } = require('sequelize')
const { config } = require('../config/config')
const setupModels = require('./models/index')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const connString = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
const sequelize = new Sequelize(connString, { dialect: 'postgres' })

setupModels(sequelize)

// sequelize.sync({ alter: true })

module.exports = sequelize
