require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');

beforeAll(async () => {
  if (!mongoose.connection.readyState) {
    // Apenas conecta se ainda não estiver conectado
    await mongoose.connect(process.env.MONGO_TEST_URI || 'mongodb://localhost:27017/blog-teste');
  }
});

afterAll(async () => {
  // Limpar a base de dados e desconectar
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Testes do CRUD de Posts', () => {
  let postId;

  // Testar criação de post
  it('Deve criar um novo post', async () => {
    const res = await request(app).post('/api/posts').send({
      title: 'Post de Teste',
      content: 'Conteúdo do post de teste.',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', 'Post adicionado com sucesso!');
    expect(res.body.post).toHaveProperty('_id');
    postId = res.body.post._id;
  });

  // Testar obtenção de todos os posts
  it('Deve obter todos os posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBe(1);
  });

  // Testar obtenção de um post por ID
  it('Deve obter um post por ID', async () => {
    const res = await request(app).get(`/api/posts/${postId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id', postId);
    expect(res.body).toHaveProperty('title', 'Post de Teste');
  });

  // Testar atualização de um post
  it('Deve atualizar um post por ID', async () => {
    const res = await request(app).put(`/api/posts/${postId}`).send({
      title: 'Post Atualizado',
      content: 'Conteúdo atualizado.',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Post atualizado com sucesso!');
    expect(res.body.post).toHaveProperty('title', 'Post Atualizado');
  });

  // Testar exclusão de um post
  it('Deve excluir um post por ID', async () => {
    const res = await request(app).delete(`/api/posts/${postId}`);
    expect(res.statusCode).toBe(204);
  });

  // Verificar se o post foi realmente excluído
  it('Deve retornar erro ao tentar obter um post excluído', async () => {
    const res = await request(app).get(`/api/posts/${postId}`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error', 'Post não encontrado.');
  });
});
