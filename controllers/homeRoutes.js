const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// Imports custom middleware
const isAuthenticated = require('../config/middleware/isAuthenticated');

// Route to render the homepage with posts
router.get('/', async (req, res) => {
  try {
    // Gets all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'], // Replaces 'name' with the correct field for your User model
        },
        {
          model: Comment,
          attributes: ['content', 'createdAt'], // Replace these with the correct fields for your Comment model
          include: [{ model: User, attributes: ['name'] }], // Again, replace 'name' with the correct field
        },
      ],
    });

    // Serializes data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Passes serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for login
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // Otherwise, render the 'login' template
  res.render('login');
});

// Route for signup
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirects to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // Otherwise, renders the 'signup' template
  res.render('signup');
});

// Route to handle logging out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Destroy the session
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Uses the custom middleware to protect routes that require authentication
router.get('/dashboard', isAuthenticated, async (req, res) => {
  try {
    // Assuming 'req.session.user_id' holds the id of the logged-in user
    const userPostsData = await Post.findAll({
      where: { userId: req.session.user_id },
      include: [
        {
          model: Comment,
          attributes: ['id', 'content', 'postId', 'userId', 'createdAt'],
          include: [{ model: User, attributes: ['username'] }]
        },
        {
          model: User,
          attributes: ['username']
        }
      ],
      order: [['createdAt', 'DESC']] // Orders posts by creation date
    });

    // Serialize the data for the template
    const posts = userPostsData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in // Passes logged-in status to the template
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
module.exports = router;
