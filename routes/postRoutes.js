// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Rota GET para obter todos os posts
router.get('/', postController.getPosts);

// Rota POST para adicionar um novo post
router.post('/', postController.addPost);

module.exports = router;
