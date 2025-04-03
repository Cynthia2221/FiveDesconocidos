'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subject.belongsToMany(models.User, {
        through: 'userSubjects',
        foreignKey: 'subjectId',
        otherKey: 'userId'
      });
      Subject.belongsToMany(models.Level, {
        through: 'subjectLevels',
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