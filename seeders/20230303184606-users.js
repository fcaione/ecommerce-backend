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
   users.push({
    name: 'Guest',
    email: 'Guest@guest.com',
    passwordDigest: '$2b$12$JzeSF7TBOgy3uOMKLQrcBeSt6QsAqt9sr0M59jRWGwi100y9us5ym',
    createdAt: new Date(),
    updatedAt: new Date()
   })
   await queryInterface.bulkInsert('users', users)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
};
