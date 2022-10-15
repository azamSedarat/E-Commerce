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
      CustumerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers', 
          key: 'id'
        }},
        AddressId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Address',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        CartId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Cart',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        PaymentId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Payment',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      shippedDate: {
        type: Sequelize.DATE
      },
      amount:{
        allowNull:false,
        type:DataTypes.INTEGER
    },
      paymentMethod:{
        allowNull:false,
        type: DataTypes.ENUM(["online", "cash","credit"])

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