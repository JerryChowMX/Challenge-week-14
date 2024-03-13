const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

// Import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Model associations
User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE', 
});

Post.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user', 
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE', 
  as: 'comments', 
});

Comment.belongsTo(Post, {
  foreignKey: 'postId',
  as: 'post',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE', 
  as: 'comments',
});

// Initialize the database connection
const initDb = async () => {
  try {
    await sequelize.sync({ force: false }); 
    console.log('Database connected and models synced successfully.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

// Export models and database initialization function
module.exports = {
  initDb,
  models: {
    User,
    Post,
    Comment,
  },
};
