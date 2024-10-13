const { DataTypes, Model } = require('sequelize')

const ORDER_TABLE = 'Orders'

const OrderSchema = {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  totalItems: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'total_items'
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: 'total_price'
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

class Order extends Model {
  static associate(models) {
    this.hasMany(models.Product, { as: 'items', foreignKey: 'orderId'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}

module.exports = { ORDER_TABLE, OrderSchema, Order }
