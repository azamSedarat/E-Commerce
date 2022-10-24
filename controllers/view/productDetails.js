const db = require("../../models");

const getProductDetails= async(req, res) => {
    try {

        // const product= await db.Product.findOne({
        //      where:{id:req.params.productId},
        //      include:{
        //         model: db.ProductFeature,
        //         attributes: ['id','varientFeature','photo'],
        //         include:{
        //             model: db.Seller,
        //             attributes: ['id','qualify','storeName'],
        //           }
        //       }
        //     })
        const category= await db.Category.findAll({
            include: {
              model: db.Category,
              as: 'Parent'
            }
          });
        res.send(category)
        // res.render("productDetails", {product})
    } catch (error) {
        
        res.send(error.message)
    }
}



module.exports = {
    getProductDetails
}