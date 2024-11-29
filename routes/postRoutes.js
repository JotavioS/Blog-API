const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Rota para obter todos os posts
router.get('/', postController.getPosts);

// Rota para obter um único post por ID
router.get('/:id', postController.getPostById);

// Rota para criar um novo post
router.post('/', postController.addPost);

// Rota para atualizar um post por ID
router.put('/:id', postController.updatePost);

// Rota para excluir um post por ID
router.delete('/:id', postController.deletePost);

module.exports = router;
