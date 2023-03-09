'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "userId",
        as: "commentOwner",
      })
      Comment.belongsTo(models.Listing, {
        foreignKey: "listingId",
        as: "listingsComments",
      })
    }
  }
  Comment.init({
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "listings",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      },
      onDelete: "CASCADE"
    }
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: "comments"
  });
  return Comment;
};