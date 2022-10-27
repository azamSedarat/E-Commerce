const db = require("../models")

const getAllOrders = async (customerId)=> {
    try {
        const orders = await db.Order.findAll({
            where: {
                CustumerId: customerId
            }
          })
        return orders
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllOrders
}