'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductFeatures', [{

      varientFeature:'[{"lable":"رنگ","title": "مشکی"}]',
      ProductId : 1,
      photo :"/images/gallery/1/1.jpg"
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "آبی"}]',
      ProductId : 1,
      photo :"/images/gallery/1/2.jpg"
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "سفید"}]',
      ProductId : 1,
      photo :"/images/gallery/1/4.jpg"
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "بنفش"}]',
      ProductId : 1,
      photo :"/images/gallery/1/3.jpg"
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "مشکی"}]',
      ProductId : 2,
      photo :"/images/gallery/2/1.jpg"
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "آبی"}]',
      ProductId : 2,
      photo :"/images/gallery/2/3.jpg"
    },
    {
      varientFeature:'[{"lable":"رنگ","title": "زرد"}]',
      ProductId : 2,
      photo :"/images/gallery/2/2.jpg"
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductFeatures', null, {});
  }
};