 const getCart = async(req, res) => {
    const owner = req.user.username; // useri ke mahsul search mikone
    try {
        const cart = await Cart.findOne({ owner });
        if (cart && cart.Product.length > 0)
            return res.status(200).send(cart);

        else {
            res.send({ message: "sabade kharid khali ast" });
        }
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