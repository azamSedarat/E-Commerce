const db = require("../../models");

const getProduct = async (productId)=> {
    try {
        return currentproduct = await db.Product.findByPk(productId,{
            include:{
            model: db.ProductFeature,
            attributes: ['id','varientFeature','photo'],
            include:{
                model: db.Seller,
                attributes: ['id','qualify','storeName'],
                }
            }
        })
        
    } catch (error) {
        throw error
    }
}