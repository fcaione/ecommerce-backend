'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Listing, {
        foreignKey: "userId",
        as: "listings"
      })
      User.hasMany(models.Comment, {
        foreignKey: "userId",
        as: "comments"
      })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users"
  });
  return User;
};