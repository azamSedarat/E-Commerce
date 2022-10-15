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
          model: {
            tableName: 'Customers',
          },
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
        AddressId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Addresses',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        CartId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Carts',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
        PaymentId: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'Payments',
            },
            key: 'id',
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        },
      shippedDate: {
        type: Sequelize.DATE
      },
      amount:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
      paymentMethod:{
        allowNull:false,
        type: Sequelize.ENUM(["online", "cash","credit"])

    },
    description:{
        allowNull:true,
        type:Sequelize.STRING
    },
    orderDate:{
        allowNull:false,
        type:Sequelize.DATE
    },
    orderStatus:{
        allowNull:false,
        type:Sequelize.ENUM([
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