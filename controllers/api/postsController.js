const router = require('express').Router();
const { Post } = require('../../models');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

// Route to create a new post
router.post('/', isAuthenticated, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.userId, // Assuming you store userId in the session upon login
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to update a post by its `id` value
router.put('/:id', isAuthenticated, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
        userId: req.session.userId, // Ensure the user owns the post they're trying to update
      },
    });

    if (!postData[0]) {
      res.status(404).json({ message: 'No post found with this id or you are not the owner' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to delete a post by its `id` value
router.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId, // Ensure the user owns the post they're trying to delete
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id or you are not the owner' });
      return;
    }

    res.status(200).json({ message: 'Post successfully deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
