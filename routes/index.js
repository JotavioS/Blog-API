// routes/index.js
const express = require('express');
const router = express.Router();
const postRoutes = require('./postRoutes');

// Usar as rotas de posts
router.use('/posts', postRoutes);

module.exports = router;