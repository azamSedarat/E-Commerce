'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sellers', [{
      UserId : 1,
      storeName : "گالری آوینا",
      qualify : 100
    },
    {
      UserId : 2,
      storeName : "کالالوزی",
      qualify : 50
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sellers', null, {});
  }
};