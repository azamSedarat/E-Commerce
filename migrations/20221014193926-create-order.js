'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      custumerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'customers', 
          key: 'id'
        }},
    
      shippedDate: {
        type: Sequelize.STRING
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
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};