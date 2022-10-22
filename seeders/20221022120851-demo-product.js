'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت',
      CategoryId : 3,
      feature:'{"فناوری صفحه‌نمایش":"Super AMOLED","اندازه": 6.4,"رزولوشن عکس" : "64 مگاپیکسل","نسخه سیستم عامل": "Android 11"}',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'گوشی موبایل شیائومی مدل Poco X4 Pro 5G 2201116PG دو سیم کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت',
      CategoryId : 4,
      feature:'{"فناوری صفحه‌نمایش":"Super AMOLED","اندازه": 6.67,"رزولوشن عکس" : "108 مگاپیکسل","نسخه سیستم عامل": "Android 11"}',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
