import {DataTypes} from "sequlize"


export default(sequlize)=>{
    sequlize.define(
        "Payment",{
            refrence_id:{
                allowNull:false,
                type:DataTypes.INTEGER
            },
            amount:{
                allowNull:true,
                type:DataTypes.INTEGER
            },
            paymentDate:{
                allowNull:false,
                type:DataTypes.DATE
            },
            description:{
                allowNull:true,
                type:DataTypes.STRING
            },
            status:{
                allowNull:false,
                type:DataTypes.ENUM(["PaymentComplete",
                    "PaymentDeclined",
                    "PaymentDue",
                    "PaymentPastDue"])
            }
        }
    )

}