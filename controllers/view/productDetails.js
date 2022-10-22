const db = require("../../models")

const getProductDetails= async(req, res) => {
    try {
        const product = await db.Product.findOne({
            where: {
              id: req.params.productId
            }
        })
        const product_features = await product.getProductFeatures();
        const category = await db.Category.findOne({
            where: {
              id: product.CategoryId
            }
        })

        res.render("productDetails", {product, product_features, category, req})
    } catch (error) {
        
        res.send(error.message)
    }
}



module.exports = {
    getProductDetails
}