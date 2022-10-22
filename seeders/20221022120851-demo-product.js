'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت',
      CategoryId : 3,
      feature:'[{"lable":"فناوری صفحه‌نمایش","title":"Super AMOLED"},{"lable":"اندازه","title": 6.4},{"lable":"رزولوشن عکس", "title":"64 مگاپیکسل"},{"lable":"نسخه سیستم عامل","title":"Android 11"}]',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'گوشی موبایل شیائومی مدل Poco X4 Pro 5G 2201116PG دو سیم کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت',
      CategoryId : 4,
      feature:'[{"lable":"فناوری صفحه‌نمایش","title":"Super AMOLED"},{"lable":"اندازه","title": 6.67},{"lable":"رزولوشن عکس", "title":"108 مگاپیکسل"},{"lable":"نسخه سیستم عامل","title":"Android 11"}]',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
