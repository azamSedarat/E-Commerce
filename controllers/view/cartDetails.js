const  { getCartService } = require('../../services');

const getCart =  async(req, res) => {
    try {
        const cart = getCartService.getCart(req.customerId)
            res.send(cart)
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: error.message,
            data: null
        })
    }
}

module.exports = {
    getCart
  }