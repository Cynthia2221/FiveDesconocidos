'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Lessons', 'description', {
      type: Sequelize.STRING,
      allowNull: true,
      after: 'photo'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Lessons', 'description');
  }
};
