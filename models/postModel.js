// models/postModel.js
const fs = require('fs');
const path = require('path');

// Caminho do arquivo JSON que contém os posts
const filePath = path.join(__dirname, '../data/posts.json');

// Função para obter todos os posts
const getAllPosts = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Erro ao ler posts:', err);
    return [];
  }
};

// Função para adicionar um novo post
const addNewPost = (newPost) => {
  try {
    const posts = getAllPosts();
    posts.push(newPost);
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');
    return { success: true };
  } catch (err) {
    console.error('Erro ao salvar post:', err);
    return { success: false };
  }
};

module.exports = {
  getAllPosts,
  addNewPost
};