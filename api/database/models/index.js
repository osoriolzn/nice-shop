const { Order, OrderSchema } = require('./orders.model')
const { Product, ProductSchema } = require('./products.model')

function setupModels(sequelize) {
  Order.init(OrderSchema, Order.config(sequelize))
  Product.init(ProductSchema, Product.config(sequelize))

  Order.associate(sequelize.models)
  Product.associate(sequelize.models)
}

module.exports = setupModels
