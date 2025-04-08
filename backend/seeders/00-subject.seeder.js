"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const subjects = [
      { name: "Mathematics", description: "Cálculo, álgebra y geometría", createdAt: new Date(), updatedAt: new Date() },
      { name: "History", description: "Historia universal y contemporánea", createdAt: new Date(), updatedAt: new Date() },
      { name: "Biology", description: "Estudio de los seres vivos", createdAt: new Date(), updatedAt: new Date() },
      { name: "Chemistry", description: "Elementos, compuestos y reacciones", createdAt: new Date(), updatedAt: new Date() },
      { name: "Physics", description: "Fenómenos físicos y leyes del universo", createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert("subjects", subjects, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("subjects", null, {});
  },
};
