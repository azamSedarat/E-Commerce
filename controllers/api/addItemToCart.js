const  { getCartService, getProductFeatureService, addItemToCartService } = require('../../services');

const addItem = async(req, res) => {
    const currentCart = getCartService.getCart(req.customerId)
    const currentProduct = getProductFeatureService.getProductFeature(req.productFeatureId, req.sellerId)

    try {
        if (!currentProduct) {
            res.status(404).send({ message: "item not found" })
            return;
        }
        addItemToCartService.addOrUpdateCartItems(currentCart,currentProduct,req)
        res.status(200).send("registered");
    } catch (error) {
        res.status(500).send("something went wrong");
    }
}

module.exports = {
    addItem
  }