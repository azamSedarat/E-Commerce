'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      credit: {
        type: Sequelize.INTEGER,
        defultValue: 0
      },
      paybackType: {
        type: Sequelize.ENUM("Deposit to wallet","Deposit to bank account."),
      },
      job: {
        type: Sequelize.STRING
      },
      customerType: {
        type: Sequelize.ENUM("person","company"),
        defaultValue:"person"
      },
      companyName: {
        type: Sequelize.STRING
      },
      financialNumber: {
        type: Sequelize.INTEGER
      },
      registerIdentity: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Customers');
  }
};