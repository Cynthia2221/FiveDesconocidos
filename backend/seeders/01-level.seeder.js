"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const levels = [
      { name: "Elementary", createdAt: new Date(), updatedAt: new Date() },
      { name: "High School", createdAt: new Date(), updatedAt: new Date() },
      { name: "University", createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert("Levels", levels, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Levels", null, {});
  },
};
