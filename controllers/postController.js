const postModel = require('../models/postModel');

// Controlador para obter todos os posts
const getPosts = (req, res) => {
  const posts = postModel.getAllPosts();
  res.json(posts);
};

// Controlador para adicionar um novo post
const addPost = (req, res) => {
  const newPost = req.body;
  const result = postModel.addNewPost(newPost);

  if (result.success) {
    res.status(201).json({ message: 'Post adicionado com sucesso!' });
  } else {
    res.status(500).json({ error: 'Erro ao salvar post.' });
  }
};

module.exports = {
  getPosts,
  addPost
};
