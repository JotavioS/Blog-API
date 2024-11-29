const Post = require('../models/postModel');

// Obter todos os posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error('Erro ao obter posts:', err);
    res.status(500).json({ error: 'Erro ao obter posts.' });
  }
};

// Obter um único post por ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post não encontrado.' });
    }
    res.json(post);
  } catch (err) {
    console.error('Erro ao obter post:', err);
    res.status(500).json({ error: 'Erro ao obter post.' });
  }
};

// Adicionar um novo post
const addPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json({ message: 'Post adicionado com sucesso!', post: newPost });
  } catch (err) {
    console.error('Erro ao salvar post:', err);
    res.status(500).json({ error: 'Erro ao salvar post.' });
  }
};

// Atualizar um post por ID
const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post não encontrado.' });
    }
    res.json({ message: 'Post atualizado com sucesso!', post: updatedPost });
  } catch (err) {
    console.error('Erro ao atualizar post:', err);
    res.status(500).json({ error: 'Erro ao atualizar post.' });
  }
};

// Excluir um post por ID
const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post não encontrado.' });
    }
    res.status(204).send();
  } catch (err) {
    console.error('Erro ao excluir post:', err);
    res.status(500).json({ error: 'Erro ao excluir post.' });
  }
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
};
