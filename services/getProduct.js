const db = require("../../models");

const getProduct = async (productId)=> {
    try {
        const product = await db.Product.findByPk(productId,{
            include:{
            model: db.ProductFeature,
            attributes: ['id','varientFeature','photo'],
            include:{
                model: db.Seller,
                attributes: ['id','qualify','storeName'],
                }
            }
        })
        return product
    } catch (error) {
        throw error
    }
}

module.exports = {
    getProduct
}