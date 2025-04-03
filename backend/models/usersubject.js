'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSubject extends Model {
    static associate(models) {
      UserSubject.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });

      UserSubject.belongsTo(models.Subject, {
        foreignKey: 'subjectId',
        onDelete: 'CASCADE'
      });
    }
  }
  UserSubject.init({
    userId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserSubject',
    tableName: 'userSubjects',
    timestamps: true
  });
  return UserSubject;
};
