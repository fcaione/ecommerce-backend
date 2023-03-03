'use strict';
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   let users = [...Array(10)].map((user) => ({
    name: falso.randFirstName(),
    email: falso.randEmail(),
    passwordDigest: falso.randPassword(),
    rating: falso.randNumber({ min: 1, max: 5 }),
    createdAt: new Date(),
    updatedAt: new Date()
   }))
   await queryInterface.bulkInsert('users', users)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
};
