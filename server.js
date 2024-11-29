const express = require('express');
const routes = require('./routes');
const app = express();
const connectDB = require('./config/database');

connectDB();
app.use(express.json());

// Usando todas as rotas definidas no index
app.use('/api', routes);

module.exports = app; // Exportando o app para uso nos testes
