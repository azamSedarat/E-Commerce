const db = require("../models")

const addOrUpdateCartItems = async (currentCart,currentProduct,data)=> {
    try {
        const [cartItem, created] = await db.CartItems.findOrCreate({
            where: { 
                CartId: currentCart.id,
                ProductFeatureId: currentProduct.id,
            }
          });
          if(created){
            await cartItem.update({quantity : data.quantity})
          }
          else{
            let newQty =  (cartItem.quantity)+(data.quantity)
            await cartItem.update({quantity : newQty})
          }

        return cartItem;
    } catch (error) {
        throw error
    }
}

module.exports = {
    addOrUpdateCartItems
}