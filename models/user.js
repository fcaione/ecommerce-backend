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
        as: "listings",
        onDelete: "CASCADE"
      })
      User.hasMany(models.Comment, {
        foreignKey: "userId",
        as: "comments", 
        onDelete: "CASCADE"
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
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg"
    },
    backgroundImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users"
  });
  return User;
};