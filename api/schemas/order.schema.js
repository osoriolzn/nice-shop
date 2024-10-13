const Joi = require('joi')

const id = Joi.string().uuid()
const totalItems = Joi.number().integer().positive().min(1)
const totalPrice = Joi.number().positive()

const createOrderSchema = Joi.object({
  id: id.required(),
  totalItems: totalItems.required(),
  totalPrice: totalPrice.required()
})

const updateOrderSchema = Joi.object({
  id: id,
  totalItems: totalItems,
  totalPrice: totalPrice
})

const getDelOrderSchema = Joi.object({
  id: id.required()
})

module.exports = { createOrderSchema, updateOrderSchema, getDelOrderSchema }
