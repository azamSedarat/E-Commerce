const db = require("../../models");
const getProductFeature = async (productFeatureId, sellerId)=> {
    try {
        return product= await db.ProductFeature.findByPk(productFeatureId,{
               attributes: ['id','varientFeature','photo'],
               include:{
                model: db.Seller,
                where:{SellerId : sellerId}
                 }
             })
    } catch (error) {
        throw error
    }
}
module.exports = {
    getProductFeature
}