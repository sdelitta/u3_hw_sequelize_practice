'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('humane_society', [
      {
        address: '123 Sesame Street',
        availableDogs: 3,
        availableCats: 2
      },
      {
        address: '456 Poppy Place',
        availableDogs: 2,
        availableCats: 1
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
