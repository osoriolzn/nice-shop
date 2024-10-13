const { DataTypes, Model } = require('sequelize')
const { ORDER_TABLE } = require('./orders.model')

const PRODUCT_TABLE = 'Products'

const ProductSchema = {
  id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  idItem: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_item'
  },
  price: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING
  },
  orderId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'order_id',
    references: {
      model: ORDER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Order, { as: 'order' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product }
