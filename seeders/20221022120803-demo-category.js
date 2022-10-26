'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'SNAP-STORE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'کالای دیجیتال',
        description: 'اگر شما هم هر سال چشم انتظار ارائه جدیدترین محصولات برندهای مطرح دنیا هستید، کالای دیجیتال دسته بندی مورد علاقه شماست. محصولات این دسته بسیار متنوع هستند و در قلب تپنده‌ی آن‌ها جدیدترین تکنولوژی‌ها قرار گرفته است. شما می‌توانید این محصولات را از قیمت‌های اقتصادی تا گران‌ترین و کامل‌ترین کانفیگ ممکن تهیه کنید. ',
        parentId :1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      name: 'موبایل',
      description: 'گوشی موبایل و تلفن هوشمند یک تلفن همراه با یک کامپیوتر یکپارچه و سایر ویژگی‌هایی است که در اصل به تلفن‌ها مرتبط نیستند. از میان این ویژگی‌ها می‌توان به سیستم‌عامل، وب‌گردی و قابلیت اجرای برنامه‌های نرم‌افزاری اشاره کرد. گوشی‌های هوشمند بخشی از زندگی روزمره ما هستند و نه‌تنها به ما کمک می‌کنند که با دیگران در ارتباط بمانیم بلکه امکانات بسیار گسترده‌تری مانند عکاسی و فیلمبرداری، بازی کردن، کتاب خواندن و غیره را در اختیار ما قرار می‌دهند. از سوی دیگر، برای استفاده از برخی از این امکانات و همچنین، مراقبت از سلامت گوشی هوشمند به یک سری لوازم جانبی نیاز داریم.',
      feature:["فناوری صفحه‌نمایش", "اندازه", "رزولوشن عکس", "نسخه سیستم عامل"],
      varientFeature:["رنگ"],
      parentId :2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'سامسونگ',
      description: 'برند شناخته‌شده‌ی سامسونگ یک شرکت چند ملیتی کره‌ای است که از سال 1938 در حال فعالیت است. این برند یکی از بزرگ‌ترین و شناخته‌شده‌ترین برندهای جهان است که محصولات آن در سراسر دنیا به فروش می‌رسد و از محبوبیت بالایی برخوردار است. این شرکت در چند دهه‌ی گذشته در تولید محصولات سخت‌افزاری و نرم‌افزاری پیشگام بوده و امکانات بسیار هوشمندی را در اختیار مصرف‌کنندگان قرار داده است.',
      feature:["فناوری صفحه‌نمایش", "اندازه", "رزولوشن عکس", "نسخه سیستم عامل"],
      varientFeature:["رنگ"],
      parentId :3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'شیائومی',
      description: 'شرکت شیائومی یک شرکت چینی است که سال 2011 اولین گوشی موبایل خود را وارد بازار کرد و در طی سال‌های گذشته توانسته است به‌عنوان یک برند با ساخت موبایل با قیمت‌های به‌صرفه و تولید گوشی‌های میان‌رده برای خود اعتباری در سطح بین‌المللی به دست آورد. برند xiaomi در حقیقت ترکیبی از دو کلمه‌ی چینی است. شیائومی برای لوگو از واژه‌ی mi استفاده کرده است که در زبان چینی معنی قلب هم می‌دهد، هرچند تبلیغات زیادی برای استفاده از بار معنایی لوگو انجام‌نشده و در بسیاری از نقاط دنیا هیچ‌کس معنی نام این برند را نمی‌داند. خط تولید شیائومی گوشی‌های مختلفی وارد بازار کرده است که تقریباً برای هر بودجه‌ای مناسب است و چیزی که می‌توان به قطعیت گفت این است که قیمت مناسب انواع گوشی‌ شیائومی روی کیفیت ساخت آن‌ها تأثیر نگذاشته است، در واقع شیائومی از روش‌هایی برای کاهش قیمت استفاده می‌کند که قابلیت‌های اصلی و اولیه‌ی گوشی تحت تأثیر قرار نگیرند اما به‌عنوان کسی که می‌خواهد از این گوشی‌ها استفاده کند باید تمام مشخصات (specification) آن‌ها را ببینید تا مطمئن شوید اولویت‌های شما در نظر گرفته‌شده است.',
      feature:["فناوری صفحه‌نمایش", "اندازه", "رزولوشن عکس", "نسخه سیستم عامل"],
      varientFeature:["رنگ"],
      parentId :3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
