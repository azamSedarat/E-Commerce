const db = require("../../models")

const productList = async (req, res) => {
    try {
        const products = await db.ProductFeatures.findAll({
            include: {
                model: db.Product,
                attributes: ["name","id"]
            },
             
            order: db.sequelize.random() ,
            limit:2,
            attributes: ["price", "photo"]
        })
        console.log(products[0].Product.name);

        res.render("home.pug", {req, products})
        
    } catch (error) {
        return res.render("error", { errors: error.message })
    }
}

module.exports = {
    productList
}