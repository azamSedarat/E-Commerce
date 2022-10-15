'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
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
      amount:{
        allowNull:true,
        type:Sequelize.INTEGER
    },
    paymentDate:{
        allowNull:false,
        type:Sequelize.DATE
    },
    description:{
        allowNull:true,
        type:Sequelize.STRING
    },
    status:{
        allowNull:false,
        type:Sequelize.ENUM(["PaymentComplete",
            "PaymentDeclined",
            "PaymentDue",
            "PaymentPastDue"])
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
    await queryInterface.dropTable('Payments');
  }
};