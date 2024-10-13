const { Router } = require('express')
const OrdersServices = require('../services/orders.service')
const { validatorHandler } = require('../middlewares/validator.handler')
const { createOrderSchema, updateOrderSchema, getDelOrderSchema } = require('../schemas/order.schema')

const router = Router()
const service = new OrdersServices()

router.get('/', async (req, res) => {
  const orders = await service.findAll()
  res.status(200).json(orders)
})

router.get('/:id',
  validatorHandler(getDelOrderSchema, 'params'),
  async (req, res) => {
    const { id } = req.params
    const order = await service.findById(id)
    res.status(200).json(order)
  }
)

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res) => {
    const body = req.body
    const newOrder = await service.create(body)
    res.status(201).json(newOrder)
  }
)

router.patch('/:id',
  validatorHandler(getDelOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res) => {
    const { id } = req.params
    const body = req.body
    const updatedOrder = await service.update(id, body)
    res.status(200).json(updatedOrder)
  }
)

router.delete('/:id',
  validatorHandler(getDelOrderSchema, 'params'),
  async (req, res) => {
    const { id } = req.params
    const deletedOrder = await service.delete(id)
    res.status(204).json(deletedOrder)
  }
)

module.exports = router
