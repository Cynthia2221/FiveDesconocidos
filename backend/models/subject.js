'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    static associate(models) {
      Subject.belongsToMany(models.User, {
        through: 'UserSubjects',
        foreignKey: 'subjectId',
        otherKey: 'userId'
      });
      Subject.belongsToMany(models.Level, {
        through: 'subjectLevels',
        foreignKey: 'subjectId',
        otherKey: 'levelId'
      });
      Subject.hasMany(models.Lesson, {
        foreignKey: 'subjectId'
      });
    }
  }
  Subject.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};
