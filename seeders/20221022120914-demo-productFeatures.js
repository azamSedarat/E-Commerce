'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductFeatures', [{

      feature:'{"color": "red", "size": 2}',
      ProductId : 1,
      price: 10000,
      stock: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      feature:'{"color": "blue", "size": 2}',
      ProductId : 1,
      price: 200000,
      stock: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      feature:'{"color": "green", "size": 2}',
      ProductId : 1,
      price: 50000,
      stock: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductFeatures', null, {});
  }
};