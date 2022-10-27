const  { getProductListService } = require('../../services');

const getProducts = async (req, res) => {
    try{
        const products = getProductListService.getProductList();
        res.render("home.pug", {req, products})
        
    } catch (error) {
        return res.render("error", { errors: error.message })
    }
}

module.exports = {
    getProducts
}