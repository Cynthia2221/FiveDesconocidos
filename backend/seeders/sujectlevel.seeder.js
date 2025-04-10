"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const subjects = await queryInterface.sequelize.query(`SELECT id FROM Subjects`, { type: Sequelize.QueryTypes.SELECT });
    const levels = await queryInterface.sequelize.query(`SELECT id FROM Levels`, { type: Sequelize.QueryTypes.SELECT });
    const lessons = await queryInterface.sequelize.query(`SELECT id FROM Lessons`, { type: Sequelize.QueryTypes.SELECT });

    if (subjects.length === 0 || levels.length === 0 || lessons.length === 0) {
      console.warn("⚠ No subjects, levels or lessons in the db.");
      return;
    }

    const subjectLevels = [];

    subjects.forEach(subject => {
      // Asignar entre 1 y 2 niveles aleatorios a cada asignatura
      const numLevels = Math.floor(Math.random() * 2) + 1;
      const shuffledLevels = levels.sort(() => 0.5 - Math.random()).slice(0, numLevels);

      shuffledLevels.forEach(level => {
        subjectLevels.push({
          subjectId: subject.id,
          levelId: level.id,
          lessonId: lessons[Math.floor(Math.random() * lessons.length)].id,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      });
    });

    await queryInterface.bulkInsert("subjectLevels", subjectLevels, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("subjectLevels", null, {});
  },
};
