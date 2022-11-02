const db = require("../models")

class OrderService {
    async getAllOrders(customerId) {
        return orders = await db.Order.findAll({
            where: {
                CustumerId: customerId
            }
          })
    }
  }
  module.exports = new OrderService();
  