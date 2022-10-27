const db = require("../../models")

const getCart = async (customerId)=> {
    try {
        const [cart, created] = await db.Cart.findOrCreate({
            where: { 
                CustomerId: customerId,
                status: "open"
            },
            include:{
                model: db.ProductFeature
              }
          });
        return cart;
    } catch (error) {
        throw error
    }
}
module.exports = {
    getCart
}