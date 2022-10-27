const  { getCartService, getProductFeatureService, addItemToCartService } = require('../../');

const addItem = async(req, res) => {
    const currentCart = getCartService.getCart(req.customerId)
    const currentProductFeature = getProductFeatureService.getProductFeature(req.productFeatureId, req.sellerId)

    try {
        if (!currentProductFeature) {
            res.status(404).send({ message: "item not found" })
            return;
        }
        addItemToCartService.addOrUpdateCartItems(currentCart,currentProductFeature,req)
        res.status(200).send("registered");
    } catch (error) {
        res.status(500).send("something went wrong");
    }
}

module.exports = {
    addItem
  }