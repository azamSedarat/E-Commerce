'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductFeatures', [{

      varientFeature:'[{"lable":"رنگ","title": "بنفش"}]',
      ProductId : 1,
      price: 6279000,
      stock: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "آبی"}]',
      ProductId : 1,
      price: 6299000,
      stock: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "سفید"}]',
      ProductId : 1,
      price: 6319000,
      stock: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "مشکی"}]',
      ProductId : 1,
      price: 6499000,
      stock: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "مشکی"}]',
      ProductId : 2,
      price: 8150000,
      stock: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "آبی"}]',
      ProductId : 2,
      price: 8230000,
      stock: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "زرد"}]',
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