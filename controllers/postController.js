const postModel = require('../models/postModel');

// Controlador para obter todos os posts
const getPosts = (req, res) => {
  const posts = postModel.getAllPosts();
  res.json(posts);
};

module.exports = {
  getPosts
};
