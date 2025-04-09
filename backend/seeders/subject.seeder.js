"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const subjects = [
      { name: "Mathematics", description: "Cálculo, álgebra y geometría", photo: "/public/images/history.jpg", createdAt: new Date(), updatedAt: new Date() },
      { name: "History", description: "Historia universal y contemporánea", photo: "/public/images/music.jpg", createdAt: new Date(), updatedAt: new Date() },
      { name: "Biology", description: "Estudio de los seres vivos", photo: "/public/images/history.jpg", createdAt: new Date(), updatedAt: new Date() },
      { name: "Chemistry", description: "Elementos, compuestos y reacciones", photo: "/public/images/music.jpg", createdAt: new Date(), updatedAt: new Date() },
      { name: "Physics", description: "Fenómenos físicos y leyes del universo", photo: "/public/images/history.jpg", createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert("Subjects", subjects, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Subjects", null, {});
  },
};
