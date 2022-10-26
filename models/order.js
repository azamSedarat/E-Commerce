'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Order.belongsTo(models.Customer),
     Order.hasOne(models.Address),
     Order.belongsTo(models.Cart),
     Order.hasOne(models.Payment)
    }
  }
  Order.init({
    shippedDate: DataTypes.DATE,
    amount:{
      allowNull:false,
      type:DataTypes.INTEGER
    },
    paymentMethod:{
        allowNull:false,
        type: DataTypes.ENUM(["online", "cash","credit"])

    },
    description:{
        allowNull:true,
        type:DataTypes.STRING
    },
    orderDate:{
        allowNull:false,
        type:DataTypes.DATE
    },
    orderStatus:{
        allowNull:false,
        type:DataTypes.ENUM([
            "OrderCancelled",
            "OrderDelivered",
            "OrderInTransit",
            "OrderPaymentDue",
            "OrderPickupAvailable",
            "OrderProblem",
            "OrderProcessing",
            "OrderReturned"])
    }
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: false
  });
  return Order;
};