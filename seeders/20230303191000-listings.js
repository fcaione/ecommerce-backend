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
    soldOut: falso.randBoolean(),
    userId: falso.randNumber({ min: 1, max: 10 }),
    createdAt: new Date(),
    updatedAt: new Date()
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
