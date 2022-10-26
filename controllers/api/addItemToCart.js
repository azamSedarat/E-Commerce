const cartRouter = require("router");
 async(req, res) => {
    const owner = req.user.username;
    const { productId, quantity } = req.body;
    try {
        const cart = await cart.findOne({ owner });
        const product = await product.findOne({ _id: productId });
        if (!product) {
            res.status(404).send({ message: "item not found" });
            return;
        }
        const price = product.price;
        const name = product.name;
        //If cart already exists for user,
        if (cart) {
            const itemIndex = cart.cartitems.findIndex((product) => product.productId == productId);
            //check if product exists or not
            if (itemIndex > -1) {
                let product = cart.cartitems[itemIndex];
                product.quantity += quantity;

                cart.cartitems[itemIndex] = product;
                await cart.save();
                res.status(200).send(cart);
            } else {
                cart.cartitems.push({ productId, name, quantity, price });
                const bil = cart.cartitems.reduce((acc, curr) => {
                    return acc + curr.quantity * curr.price;
                }, 0)
                await cart.save();
                res.status(200).send(cart);
            }
        } else {
            //no cart exists, create one
            const newCart = await Cart.create({
                owner,
                cartitems: [{ productId, name, quantity, price }],
                bill: quantity * price,
            });
            return res.status(201).send(newCart);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("something went wrong");
    }
});