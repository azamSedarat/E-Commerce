'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductFeatures', [{

      varientFeature:'{"رنگ": "بنفش"}',
      ProductId : 1,
      price: 6279000,
      stock: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'{"رنگ": "آبی"}',
      ProductId : 1,
      price: 6299000,
      stock: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'{"رنگ": "سفید"}',
      ProductId : 1,
      price: 6319000,
      stock: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'{"رنگ": "مشکی"}',
      ProductId : 1,
      price: 6499000,
      stock: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'{"رنگ": "مشکی"}',
      ProductId : 2,
      price: 8150000,
      stock: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'{"رنگ": "آبی"}',
      ProductId : 2,
      price: 8230000,
      stock: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'{"رنگ": "زرد"}',
      ProductId : 2,
      price: 8200000,
      stock: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductFeatures', null, {});
  }
};