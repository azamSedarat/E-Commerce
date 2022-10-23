const express = require("express");
const Cart = require("../models/cartitems");
const Product = require("../models/product");
const Auth = require("../middlewares/authentication");

const router = express.Router()

router.get("/cart", Auth, async(req, res) => {
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
});
module.exports = router;