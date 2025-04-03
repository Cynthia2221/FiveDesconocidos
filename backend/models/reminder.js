'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reminder extends Model {
    static associate(models) {
      // define association here
    }
  }
  Reminder.init({
    date: DataTypes.DATE,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reminder',
  });
  return Reminder;
};
