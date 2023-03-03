'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "userId",
        as: "comments"
      })
      Comment.belongsTo(models.Listing, {
        foreignKey: "listingId",
        as: "comments"
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
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: "comments"
  });
  return Comment;
};