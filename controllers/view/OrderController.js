const {orderService} =  require("../../services")

class OrderController {

  async getOrders(req, res) {
    try {
        const orders = orderService.getAllOrders(req.customerId)
            res.send(orders)      
    } catch (error) {
        return res.render("error", { errors: error.message })
    }
}
}

module.exports = new OrderController();