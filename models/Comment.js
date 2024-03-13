const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
  {
    // Defines attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
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
      allowNull: false,
      references: {
        model: 'user', 
        key: 'id', 
      },
    },
    // Foreign key for the post
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post', 
        key: 'id', 
      },
    },
  },
  {
    sequelize,
    timestamps: true, 
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
