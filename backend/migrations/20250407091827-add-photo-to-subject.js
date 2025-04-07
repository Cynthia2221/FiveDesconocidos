'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Subjects', 'photo', {
      type: Sequelize.STRING,
      allowNull: true,
      after: 'description'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Subjects', 'photo');
  }
};
