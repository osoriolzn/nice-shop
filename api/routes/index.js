const { Router } = require('express')
const OrdersRouter = require('./orders.routes')

function RouterApi(app) {
  const router = Router()

  app.use('/api/v1', router)

  router.use('/orders', OrdersRouter)
}

module.exports = RouterApi
