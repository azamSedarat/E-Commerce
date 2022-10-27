const  { getProductService, getCategoryService } = require('../../services');

const getProductDetails= async(req, res) => {
    try {

        const product= getProductService.getProduct(req.params.productId)
            
        const category = getCategoryService.getCategory(product.categoryId)

        res.render("productDetails", {product,category})
    } catch (error) {
        
        res.send(error.message)
    }
}

module.exports = {
    getProductDetails
}