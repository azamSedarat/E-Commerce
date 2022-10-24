'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userName : "sedarat",
      userRole : "seller",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName : "razavi",
      userRole : "seller",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};