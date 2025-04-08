"use strict";

const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash("1234", 12);

    // Datos iniciales de los usuarios
    const users = [
      {
        name: "Mayer",
        email: "mayer@gmail.com",
        password: hashedPassword,
        age: 20,
        photo: "/public/images/history.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cynthia",
        email: "cynthia@gmail.com",
        password: hashedPassword,
        age: 30,
        photo: "/public/images/history.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "William",
        email: "william@gmail.com",
        password: hashedPassword,
        age: 22,
        photo: "/public/images/history.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Margarida",
        email: "margarida@gmail.com",
        password: hashedPassword,
        age: 22,
        photo: "/public/images/history.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chris",
        email: "chris@gmail.com",
        password: hashedPassword,
        age: 22,
        photo: "/public/images/history.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    // Insertar usuarios en la tabla Users
    await queryInterface.bulkInsert("Users", users, {});

    // Obtener los IDs de los usuarios insertados
    const insertedUsers = await queryInterface.sequelize.query(
      `SELECT id FROM Users`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Obtener los IDs de las asignaturas existentes
    const subjects = await queryInterface.sequelize.query(
      `SELECT id FROM Subjects`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (subjects.length === 0) {
      console.warn("⚠ No hay asignaturas en la base de datos. No se asignarán materias a los usuarios.");
      return;
    }

    // Crear relaciones en UserSubjects (asignar una asignatura aleatoria a cada usuario)
    const userSubjects = insertedUsers.map(user => {
      const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
      return {
        userId: user.id,
        subjectId: randomSubject.id,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });

    // Insertar relaciones en la tabla UserSubjects
    await queryInterface.bulkInsert("UserSubjects", userSubjects, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserSubjects", null, {});
    await queryInterface.bulkDelete("Users", null, {});
  },
};



// npx sequelize-cli db:migrate
// npx sequelize-cli db:seed:all
