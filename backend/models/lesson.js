'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lesson.belongsToMany(models.Subjects, {
        through: 'subjectLevels',
        foreignKey: 'lessonId',
        otherKey: 'subjectId'
      });
    }
  }
  lesson.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lesson',
  });
  return lesson;
};