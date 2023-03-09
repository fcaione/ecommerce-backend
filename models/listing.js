'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    static associate(models) {
      Listing.belongsTo(models.User, {
        foreignKey: "userId",
        as: "owner"
      })
      Listing.hasMany(models.Comment, {
        foreignKey: "listingId",
        as: "comments",
        onDelete: "CASCADE"
      })
      Listing.hasMany(models.Tag, {
        foreignKey: "listingId",
        as: "tags",
        onDelete: "CASCADE"
      })
    }
  }
  Listing.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    soldOut: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Listing',
    tableName: "listings"
  });
  return Listing;
};