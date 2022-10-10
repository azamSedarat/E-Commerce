import {DataTypes } from "sequelize"

export default(sequelize) => {

    const Cart = sequelize.define("Cart",{
        totalProductsQty : {
            type : DataTypes.INTEGER,
            allowNull : false,
            defultValue : 0},

        totalPrice : {
            type : DataTypes.INTEGER,
            allowNull : false,
            defultValue : 0
        },

        status : {
            allowNull : false,
            defultValue : "open",
            type : DataTypes.ENUM(
                ["Open", "payment_processing", "canceled", 'Closed']
                )
            }
    })  
}