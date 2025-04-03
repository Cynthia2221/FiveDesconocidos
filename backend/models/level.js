'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    static associate(models) {
      Level.hasMany(models.Lesson, {
        foreignKey: 'levelId',
        onDelete: 'CASCADE'
      });
    }
  }
  Level.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Level',
  });
  return Level;
};
