'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubjectLevel extends Model {
    static associate(models) {
      SubjectLevel.belongsTo(models.Subject, {
        foreignKey: 'subjectId',
        onDelete: 'CASCADE'
      });

      SubjectLevel.belongsTo(models.Level, {
        foreignKey: 'levelId',
        onDelete: 'CASCADE'
      });
    }
  }
  SubjectLevel.init({
    subjectId: DataTypes.INTEGER,
    levelId: DataTypes.INTEGER,
    lessonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SubjectLevel',
  });
  return SubjectLevel;
};
