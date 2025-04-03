'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubjectLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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