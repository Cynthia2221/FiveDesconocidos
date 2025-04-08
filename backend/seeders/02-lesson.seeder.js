"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const levels = await queryInterface.sequelize.query(`SELECT id FROM levels`, { type: Sequelize.QueryTypes.SELECT });

    if (levels.length === 0) {
      console.warn("⚠ No hay niveles en la base de datos. No se insertarán lecciones.");
      return;
    }

    const lessons = [];

    levels.forEach(level => {
      lessons.push({
        name: `Introducción al nivel ${level.id}`,
        url: `https://example.com/lesson/${level.id}`,
        levelId: level.id,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });

    await queryInterface.bulkInsert("lessons", lessons, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lessons", null, {});
  },
};
