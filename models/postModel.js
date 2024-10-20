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

module.exports = {
  getAllPosts
};