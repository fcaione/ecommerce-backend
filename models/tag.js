'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Tag.belongsTo(models.User, {
      //   foreignKey: "userId",
      //   as: "usersTags",
      // })
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
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "users",
    //     key: "id"
    //   },
    //   onDelete: "CASCADE"
    // }
  }, {
    sequelize,
    modelName: 'Tag',
    tableName: "tags"
  });
  return Tag;
};