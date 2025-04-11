"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const [levels, subjects] = await Promise.all([
      queryInterface.sequelize.query(`SELECT id, name FROM Levels`, { type: Sequelize.QueryTypes.SELECT }),
      queryInterface.sequelize.query(`SELECT id, name FROM Subjects`, { type: Sequelize.QueryTypes.SELECT })
    ]);

    if (levels.length === 0 || subjects.length === 0) {
      console.warn("⚠ No levels or subjects in the db.");
      return;
    }

    console.log("Niveles encontrados:", levels.map(l => `${l.id}: ${l.name}`).join(", "));
    console.log("Materias encontradas:", subjects.map(s => `${s.id}: ${s.name}`).join(", "));

    // Usar el primer nivel y la primera materia disponibles
    const levelId = levels[0].id;
    const subjectId = subjects[0].id;

    console.log(`Usando nivel ID: ${levelId} y materia ID: ${subjectId}`);

    // Datos de las lecciones
    const lessonData = [
      {
        title: "Lesson 1",
        description: "Master basic arithmetic and algebra concepts to build a strong foundation.",
        video: "https://www.youtube.com/embed/OmJ-4B-mS-Y",
        photo: "/public/images/lessons/lessonMath1.png",
        subjectId: subjectId,
        levelId: levelId,
        content:
          "Introduction to arithmetic operations: addition, subtraction, multiplication, and division.Understanding the order of operations (PEMDAS).Basic algebraic expressions and how to simplify them."
      },
      {
        title: "Lesson 2",
        description: "Learn to convert fractions and decimals with practical examples.",
        video: "https://www.youtube.com/embed/Kp2bYWRQylk",
        photo: "/public/images/lessons/lessonMath2.png",
        subjectId: subjectId,
        levelId: levelId,
        content:
          "Understanding fractions and their components (numerator and denominator).Converting fractions to decimals and vice versa.Real-world applications of fractions and decimals."
      },
      {
        title: "Lesson 3",
        description: "Understand variables and solve simple equations step by step.",
        video: "https://www.youtube.com/embed/0Be_6Qaq1es",
        photo: "/public/images/lessons/lessonMath3.png",
        subjectId: subjectId,
        levelId: levelId,
        content:
          "Introduction to variables and their role in equations.Solving one-step and two-step equations.Practical examples of equations in everyday life."
      },
      {
        title: "Lesson 4",
        description: "Develop strategies to approach and solve math word problems.",
        video: "https://www.youtube.com/embed/Lbg1M0PTy1A",
        photo: "/public/images/lessons/lessonMath4.png",
        subjectId: subjectId,
        levelId: levelId,
        content:
          "Breaking down word problems into manageable steps.Identifying key information and ignoring distractions. Using diagrams and equations to solve problems."
      },
      {
        title: "Lesson 5",
        description: "Apply math skills to real-world scenarios like budgeting and planning.",
        video: "https://www.youtube.com/embed/A17b_Ncwfv0",
        photo: "/public/images/lessons/lessonMath5.png",
        subjectId: subjectId,
        levelId: levelId,
        content:
          "Creating a simple budget using basic math skills. Understanding percentages in discounts and taxes.Planning and managing time effectively with math."
      }
    ];

    // Crear las lecciones con sus relaciones
    const lessons = lessonData.map((lesson, index) => ({
      name: lesson.title,
      url: lesson.video,
      photo: lesson.photo,
      description: lesson.description,
      content: lesson.content,
      levelId: lesson.levelId,
      subjectId: lesson.subjectId,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    // Insertar todas las lecciones en la base de datos
    await queryInterface.bulkInsert("Lessons", lessons, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Lessons", null, {});
  },
};

// npx sequelize-cli db:migrate 
// npx sequelize-cli db:migrate:undo:all
// orden del seeders
// $ npx sequelize-cli db:seed --seed level.seeder.js && npx sequelize-cli db:seed --seed subject.seeder.js && npx sequelize-cli db:seed --seed lesson.seeder.js && npx sequelize-cli db:seed --seed sujectlevel.seeder.js && npx sequelize-cli db:seed --seed user.seeder.js && npx sequelize-cli db:seed --seed usersubject.seeder.js