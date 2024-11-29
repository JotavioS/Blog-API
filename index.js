require('dotenv').config();
const app = require('./server');
const connectDB = require('./config/database');

// Conectar ao banco de dados
connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
