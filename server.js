// server.js
const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = 8080;

app.use(express.json());

// Usando todas as rotas definidas no index
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});