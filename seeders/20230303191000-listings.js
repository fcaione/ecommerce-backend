'use strict';
const falso = require('@ngneat/falso')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let listings = [...Array(30)].map((listing) => ({
    name: falso.randWord({ capitalize: true }),
    price: falso.randNumber({ min: 0, max: 1000 }),
    image: "https://ae01.alicdn.com/kf/H98d045f87dbb441184733c77936e64c4v/Hip-Hop-Cargo-Pants-Men-Streetwear-Cotton-Joggers-Fashion-Sweatpants-Male-Casual-Harem-Trousers-Summer-Harajuku.jpg_Q90.jpg_.webp",
    soldOut: falso.randBoolean(),
    userId: falso.randNumber({ min: 1, max: 10 }),
    createdAt: new Date(),
    updatedAt: new Date(),
   }))
   await queryInterface.bulkInsert('listings', listings)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('listings')
  }
};
