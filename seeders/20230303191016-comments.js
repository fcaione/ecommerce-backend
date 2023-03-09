'use strict';
const falso = require('@ngneat/falso')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   let comments = [...Array(50)].map((comment) => ({
    content: falso.randPhrase(),
    userId: falso.randNumber({ min: 1, max: 10 }),
    listingId: falso.randNumber({ min: 1, max: 30 }),
    createdAt: new Date(),
    updatedAt: new Date()
   }))
   await queryInterface.bulkInsert('comments', comments)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
