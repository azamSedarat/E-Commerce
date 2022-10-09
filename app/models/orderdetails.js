import {DataTypes} from "sequlize"


export default(sequlize)=>{
    sequlize.define(
        "OrderDetails",{
            product_id:{
                allowNull:false,
                type:DataTypes.INTEGER
            },

            product_name:{
                allowNull:false,
                type: DataTypes.STRING
            },
            quantity:{
                allowNull:false,
                type:DataTypes.INTEGER
            },
            unit_cost:{
                type: DataTypes.INTEGER

            },

            sub_total:{
                allowNull:false,
                type:DataTypes.INTEGER

            }
        }
    )

}