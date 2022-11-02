const {productService} =  require("../../services")

class ProductController {

  async getProductDetails(req, res) {
    try {

        const product= productService.getProduct(req.params.productId)
        const category = productService.getCategory(product.categoryId)

        res.render("productDetails", {product,category})

    } catch (error) {
        return res.render("error", { errors: error.message })
    }
  }

  async getProducts(req, res) {
    try{
        const products = productService.getProductList();
        res.render("home.pug", {req, products})
        
    } catch (error) {
        return res.render("error", { errors: error.message })
    }
}
}

module.exports = new ProductController();