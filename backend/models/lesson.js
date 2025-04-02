'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    static associate(models) {
      Lesson.belongsTo(models.Level, {
        foreignKey: 'levelId',
        onDelete: 'CASCADE'
      });
    }
  }
  Lesson.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lesson',
  });
  return Lesson;
};
