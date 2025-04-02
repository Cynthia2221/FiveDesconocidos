'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Level.hasMany(models.Lesson, {
        foreignKey: 'levelId',
        onDelete: 'CASCADE'
      });
    }
  }
  level.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'level',
  });
  return level;
};