const db = require("../../models")

const getProductFeature = async (productFeatureId, sellerId)=> {
    try {
        if(sellerId){
            const productFeature= await db.ProductFeature.findByPk(productFeatureId,{
                attributes: ['id','varientFeature','photo'],
                include:{
                 model: db.Seller,
                 where:{SellerId : sellerId}
                  }
              })
              return productFeature
        }
        else{
            const productFeature= await db.ProductFeature.findByPk(productFeatureId,{
                attributes: ['id','varientFeature','photo'],
                include:{
                 model: db.Seller
                  }
              })
              return productFeature
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    getProductFeature
}