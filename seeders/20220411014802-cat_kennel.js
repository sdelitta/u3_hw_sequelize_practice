'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('humane_society', [
      {
        catName: 'Cynthia',
        breed: 'Tabby',
        age: 6,
        temperament: 'Sassy',
        humane_society_id: 1
      },
      {
        catName: 'Houdini',
        breed: 'Bombay',
        age: 6,
        temperament: 'Tame',
        humane_society_id: 1
      },
      {
        catName: 'Spookums',
        breed: 'Calico',
        age: 11,
        temperament: 'Shy',
        humane_society_id: 2
      },

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
