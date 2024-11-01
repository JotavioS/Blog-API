const request = require('supertest');
const app = require('../server');

describe('Testes na rota de Posts', () => {
  test('GET /api/posts deve retornar todos os posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
