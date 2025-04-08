"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Obtener todos los usuarios y asignaturas
    const users = await queryInterface.sequelize.query(`SELECT id FROM Users`, { type: Sequelize.QueryTypes.SELECT });
    const subjects = await queryInterface.sequelize.query(`SELECT id FROM subjects`, { type: Sequelize.QueryTypes.SELECT });

    if (users.length === 0 || subjects.length === 0) {
      console.warn("⚠ No hay usuarios o asignaturas en la base de datos. No se insertarán relaciones.");
      return;
    }

    const userSubjects = [];

    users.forEach(user => {
      // Asignar entre 1 y 2 asignaturas aleatorias a cada usuario
      const numSubjects = Math.floor(Math.random() * 2) + 1;
      const shuffledSubjects = subjects.sort(() => 0.5 - Math.random()).slice(0, numSubjects);

      shuffledSubjects.forEach(subject => {
        userSubjects.push({
          userId: user.id,
          subjectId: subject.id,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      });
    });

    await queryInterface.bulkInsert("userSubjects", userSubjects, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("userSubjects", null, {});
  },
};
