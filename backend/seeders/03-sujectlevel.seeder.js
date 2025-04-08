"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Obtener todas las asignaturas, niveles y lecciones de la base de datos
    const subjects = await queryInterface.sequelize.query(`SELECT id FROM subjects`, { type: Sequelize.QueryTypes.SELECT });
    const levels = await queryInterface.sequelize.query(`SELECT id FROM levels`, { type: Sequelize.QueryTypes.SELECT });
    const lessons = await queryInterface.sequelize.query(`SELECT id, levelId FROM lessons`, { type: Sequelize.QueryTypes.SELECT });

    if (subjects.length === 0 || levels.length === 0 || lessons.length === 0) {
      console.warn("⚠ No hay asignaturas, niveles o lecciones en la base de datos. No se insertarán relaciones.");
      return;
    }

    const subjectLevels = [];

    subjects.forEach(subject => {
      // Asignar entre 1 y 2 niveles aleatorios a cada asignatura
      const numLevels = Math.floor(Math.random() * 2) + 1;
      const shuffledLevels = levels.sort(() => 0.5 - Math.random()).slice(0, numLevels);

      shuffledLevels.forEach(level => {
        // Buscar una lección asociada al nivel actual
        const lesson = lessons.find(l => l.levelId === level.id);

        subjectLevels.push({
          subjectId: subject.id,
          levelId: level.id,
          lessonId: lesson ? lesson.id : null, 
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
