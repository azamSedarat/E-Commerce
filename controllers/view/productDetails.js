const db = require("../../models");
const getProductDetails= async(req, res) => {
    try {

        const product= await db.Product.findByPk(req.params.productId,{
             include:{
                model: db.ProductFeature,
                attributes: ['id','varientFeature','photo'],
                include:{
                    model: db.Seller,
                    attributes: ['id','qualify','storeName'],
                  }
              }
            })
            
        const category = await db.Category.findByPk(product.CategoryId, {attributes :["name"]})
        res.render("productDetails", {product,category})
    } catch (error) {
        
        res.send(error.message)
    }
}



module.exports = {
    getProductDetails
}