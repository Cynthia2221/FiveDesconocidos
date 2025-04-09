'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    static associate(models) {
      Lesson.belongsTo(models.Level, {
        foreignKey: 'levelId',
        onDelete: 'CASCADE'
      });
      Lesson.belongsTo(models.Subject, {
        foreignKey: 'subjectId',
        onDelete: 'CASCADE'
      });
    }
  }
  Lesson.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    levelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Levels',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Subjects',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Lesson',
  });
  return Lesson;
};
