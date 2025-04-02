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
      Subject.belongsToMany(models.Level, { // Corregido a singular
        through: 'SubjectLevels',
        foreignKey: 'subjectId',
        otherKey: 'levelId'
      });
    }
  }
  Subject.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};
