import {DataTypes} from "sequlize"


export default(sequlize)=>{
    sequlize.define(
        "Order",{
            shippeddate:{
                allowNull:DataTypes.STRING
            },
            amount:{
                allowNull:false,
                type:DataTypes.INTEGER
            },
            paymentMethod:{
                allowNull:false,
                type: DataTypes.ENUM(["online", "cash","credit"])

            },
            address:{
                allowNull:false,
                type: DataTypes.STRING

            },
            description:{
                allowNull:true,
                type:DataTypes.STRING
            },
            orderDate:{
                allowNull:false,
                type:DataTypes.DATE
            },
            orderStatus:{
                allowNull:false,
                type:DataTypes.ENUM([
                    "OrderCancelled",
                    "OrderDelivered",
                    "OrderInTransit",
                    "OrderPaymentDue",
                    "OrderPickupAvailable",
                    "OrderProblem",
                    "OrderProcessing",
                    "OrderReturned"])
            }




        }
    )

}