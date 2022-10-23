'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductSellers', [{
      ProductFeaturesId : 1,
      SellerId : 1,
      warranty:'ارانتی ۱۸ ماهه دیجی کالا + بیمه ۱۲ ماهه تجهیزات الکترونیک',
      price: 6279000,
      stock: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProductFeaturesId : 2,
      SellerId : 1,
      warranty:'گارانتی ۱۸ ماهه دیجی کالا + بیمه ۱۲ ماهه تجهیزات الکترونیک',
      price: 6299000,
      stock: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProductFeaturesId : 2,
      SellerId : 2,
      warranty:'گارانتی ۱۸ ماهه ',
      price: 7300000,
      stock: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProductFeaturesId : 3,
      SellerId : 1,
      price: 6319000,
      warranty:'گارانتی ۱۸ ماهه دیجی کالا + بیمه ۱۲ ماهه تجهیزات الکترونیک',
      stock: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProductFeaturesId : 4,
      SellerId : 1,
      price: 6499000,
      warranty:'گارانتی ۱۸ ماهه مایکروتل',
      stock: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProductFeaturesId : 5,
      SellerId : 2,
      price: 8150000,
      warranty:'گارانتی ۱۸ ماهه توسعه اقتصاد توان یاسین (پرهان)',
      stock: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProductFeaturesId : 6,
      SellerId : 2,
      price: 8230000,
      warranty:'گارانتی ۱۸ ماهه پارسه پیشتاز ونداد پرداز',
      stock: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProductFeaturesId : 7,
      SellerId : 1,
      price: 8200000,
      warranty:'گارانتی ۱۸ ماهه پارسه پیشتاز ونداد پرداز',
      stock: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductSellers', null, {});
  }
};