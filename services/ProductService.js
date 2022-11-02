const db = require("../models")

class ProductService {
    async getProduct(productId) {
        return product = await db.Product.findByPk(productId,{
            include:{
            model: db.ProductFeature,
            attributes: ['id','varientFeature','photo'],
            include:{
                model: db.Seller,
                attributes: ['id','qualify','storeName'],
                }
            }
        })
    }

    async getProductFeature(productFeatureId, sellerId) {
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
    }
  }

  module.exports = new ProductService();
  