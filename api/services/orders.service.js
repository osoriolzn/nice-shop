const { models } = require('../database/database')

class OrdersServices {
  constructor() {}

  async findAll() {
    const order = await models.Order.findAll({ include: ['items'] })
    return order
  }

  async findById(id) {
    const order = await models.Order.findByPk(id, { include: ['items'] })
    if (!order) {
      throw new Error('Order not found')
    }
    return order
  }

  async create(data) {
    const newOrder = await models.Order.create(data, { include: 'items' })
    return newOrder
  }

  async update(id, changes) {
    const order = await this.findById(id)
    const response = order ? await order.update(changes) : []
    return response
  }

  async delete(id) {
    const order = await this.findById(id)
    await order.destroy()
    return { id }
  }
}

module.exports = OrdersServices
