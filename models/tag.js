'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      Tag.belongsTo(models.Listing, {
        foreignKey: "listingId",
        as: "listingsTags",
      })
    }
  }
  Tag.init({
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
    }
  }, {
    sequelize,
    modelName: 'Tag',
    tableName: "tags"
  });
  return Tag;
};