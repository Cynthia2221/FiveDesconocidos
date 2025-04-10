"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(`SELECT id FROM Users`, { type: Sequelize.QueryTypes.SELECT });
    const subjects = await queryInterface.sequelize.query(`SELECT id FROM Subjects`, { type: Sequelize.QueryTypes.SELECT });

    if (users.length === 0 || subjects.length === 0) {
      console.warn("⚠ No users or subjects in the db.");
      return;
    }

    const userSubjects = [];

    users.forEach(user => {
      const numSubjects = Math.floor(Math.random() * 3) + 1;
      const shuffledSubjects = subjects.sort(() => 0.5 - Math.random()).slice(0, numSubjects);

      shuffledSubjects.forEach(subject => {
        userSubjects.push({
          userId: user.id,
          subjectId: subject.id,
          favorites: Math.random() > 0.5,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      });
    });

    await queryInterface.bulkInsert("UserSubjects", userSubjects, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserSubjects", null, {});
  },
};
