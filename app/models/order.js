import {DataTypes} from "sequlize"


export default(sequlize)=>{
    sequlize.define(
        "Order",{
            shippedDate:{
                allowNull:DataTypes.STRING
            },
            amount:{
                allowNull:false,
                type:DataTypes.INTEGER
            },
            payment_method:{
                allowNull:false,
                type: DataTypes.ENUM(["online", "cash"])

            },
            address_id:{
                allowNull:false,
                type: DataTypes.INTEGER

            },

            deliverType:{
                allowNull:false,
                type:DataTypes.ENUM(["post","dar mahal"])

            },
            description:{
                allowNull:true,
                type:DataTypes.STRING
            },
            order_date:{
                allowNull:false,
                type:DataTypes.STRING
            },
            order_status:{
                allowNull:false,
                type:DataTypes.ENUM(["proccesing","finished"])
            }




        }
    )

}