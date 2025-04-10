'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('lessons', 'subjectId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'subjects',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('lessons', 'subjectId');
  }
};
