const db = require("../../models")

const getProductDetails= async(req, res) => {
    try {
        const detail = await db.Product.findOne({
            where: {
              id: req.params.productId
            }
        })
        console.log(detail)
        res.render("productDetails", {detail, req})
    } catch (error) {
        
        res.send(error.message)
    }
}



module.exports = {
    getProductDetails
}