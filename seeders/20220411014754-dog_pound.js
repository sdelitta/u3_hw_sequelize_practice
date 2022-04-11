'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('dog_pound', [
      {
        dogName: 'Rover',
        breed: 'Golden Retriever',
        age: 2,
        temperament: 'Docile',
        humane_society_id: 1
      },
      {
        dogName: 'Bingo',
        breed: 'Golden Retriever',
        age: 1,
        temperament: 'Hyper',
        humane_society_id: 1
      },
      {
        dogName: 'Wrigby',
        breed: 'Borador',
        age: 1,
        temperament: 'Tame',
        humane_society_id: 1
      },
      {
        dogName: 'Ruby',
        breed: 'Pug',
        age: 5,
        temperament: 'Docile',
        humane_society_id: 2
      },
      {
        dogName: 'Lucy',
        breed: 'Poodle',
        age: 7,
        temperament: 'Tame',
        humane_society_id: 2
      }
  ], {})
},


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
