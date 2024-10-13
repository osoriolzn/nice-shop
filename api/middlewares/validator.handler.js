function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false })

    if (error) {
      throw new Error(error.details.map(err => err.message).join(', '))
    }

    next()
  }
}

module.exports = { validatorHandler }
