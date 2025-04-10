"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const subjects = [
      { name: "Mathematics", description: "Solid foundations in arithmetic and algebra. Master operations, fractions, decimals, and simple equations.", photo: "/public/images/Mathematics.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "History", description: "Universal and Contemporary History", photo: "/public/images/history.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Science", description: "Study of living beings and their qualities", photo: "/public/images/Sciences.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "English", description: "The grammar needed to learn how to communicate with others", photo: "/public/images/English.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Geography", description: "Physical phenomena and landscape changes over time", photo: "/public/images/Geography.png", createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert("subjects", subjects, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("subjects", null, {});
  },
};
