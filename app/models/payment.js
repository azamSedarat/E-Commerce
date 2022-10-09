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
            payment_date:{
                allowNull:false,
                type:DataTypes.STRING
            },
            description:{
                allowNull:true,
                type:DataTypes.STRING
            },
            status:{
                allowNull:false,
                type:DataTypes.ENUM(["start","Processing","finished"])
            }
        }
    )

}