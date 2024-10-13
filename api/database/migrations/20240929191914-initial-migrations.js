'use strict'

const { OrderSchema, ORDER_TABLE } = require('../models/orders.model')
const { ProductSchema, PRODUCT_TABLE } = require('../models/products.model')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_TABLE, OrderSchema)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE)
    await queryInterface.dropTable(PRODUCT_TABLE)
  }
}
