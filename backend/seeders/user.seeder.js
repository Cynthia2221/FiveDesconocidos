"use strict";

const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils");

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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cynthia",
        email: "cynthia@gmail.com",
        password: hashedPassword,
        age: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "William",
        email: "william@gmail.com",
        password: hashedPassword,
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Margarida",
        email: "margarida@gmail.com",
        password: hashedPassword,
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chris",
        email: "chris@gmail.com",
        password: hashedPassword,
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    // Insertar datos en la tabla Users
    await queryInterface.bulkInsert("Users", users, {});

    // Obtener los usuarios insertados
    const insertedUsers = await queryInterface.sequelize.query(
      `SELECT id, name, email FROM Users`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Generar tokens para los usuarios
    insertedUsers.forEach((user) => {
      const token = generateToken(user);
      console.log(`Token for ${user.name} (${user.email}): ${token}`);
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};


// npx sequelize-cli db:migrate
// npx sequelize-cli db:seed:all
