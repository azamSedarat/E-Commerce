'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductFeatures', [{

      varientFeature:'[{"lable":"رنگ","title": "بنفش"}]',
      ProductId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "آبی"}]',
      ProductId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "سفید"}]',
      ProductId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "مشکی"}]',
      ProductId : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "مشکی"}]',
      ProductId : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "آبی"}]',
      ProductId : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "زرد"}]',
      ProductId : 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductFeatures', null, {});
  }
};