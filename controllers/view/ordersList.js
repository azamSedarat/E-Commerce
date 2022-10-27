const  { getAllOrdersService } = require('../../services');

const getOrders =  async(req, res) => {
    try {
        const orders = getAllOrdersService.getAllOrders(req.customerId)
            res.send(orders)
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: error.message,
            data: null
        })
    }
}

module.exports = {
    getOrders
  }