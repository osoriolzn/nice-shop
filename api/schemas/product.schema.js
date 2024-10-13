const Joi = require('joi')

const id = Joi.number().integer().positive()
const idItem = Joi.number().integer().positive()
const price = Joi.number().positive().allow(0)
const description = Joi.string().min(3)
const category = Joi.string().min(3)
const image = Joi.string().uri()
const orderId = Joi.string().uuid()

const createProductSchema = Joi.object({
  idItem: idItem.required(),
  price: price.required(),
  description: description.required(),
  category: category.required(),
  image: image.required(),
  items: orderId.required()
})

const updateProductSchema = Joi.object({
  idItem: idItem,
  price: price,
  description: description,
  category: category,
  image: image
})

const getDelProductSchema = Joi.object({
  id: id.required()
})

module.exports = { createProductSchema, updateProductSchema, getDelProductSchema }
