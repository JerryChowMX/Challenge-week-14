const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
  {
    // Define attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // Foreign key for the user
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // This is a reference to another model
        key: 'id', // This is the column name of the referenced model
      },
    },
  },
  {
    sequelize,
    timestamps: true, // Set to true if you want Sequelize to automatically add `createdAt` and `updatedAt` fields
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
