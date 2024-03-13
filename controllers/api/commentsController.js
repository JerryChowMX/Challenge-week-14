const router = require('express').Router();
const { Comment } = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

// Route to get all comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to create a new comment
router.post('/', isAuthenticated, async (req, res) => {
  try {
    // Check the session to ensure the user is logged in
    if (!req.session.logged_in) {
      res.status(403).json({ message: 'Must be logged in to comment' });
      return;
    }

    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId, // or however you have the user id stored
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to update a comment
router.put('/:id', isAuthenticated, async (req, res) => {
  try {
    const updatedComment = await Comment.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.session.userId, // this ensures users can only edit their own comments
      },
    });

    if (updatedComment > 0) {
      res.status(200).json(updatedComment);
    } else {
      res.status(404).json({ message: 'Comment not found or user not authorized' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to delete a comment
router.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    const result = await Comment.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId, // this ensures users can only delete their own comments
      },
    });

    if (result > 0) {
      res.status(200).json({ message: 'Comment deleted' });
    } else {
      res.status(404).json({ message: 'Comment not found or user not authorized' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
