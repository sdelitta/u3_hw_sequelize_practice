'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('humane_societies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      availableDogs: {
        type: Sequelize.INTEGER
      },
      availableCats: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('humane_societies');
  }
};