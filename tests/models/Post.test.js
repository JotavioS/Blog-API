require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('../../models/postModel');

// Conectar ao banco de dados de teste antes de rodar os testes
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_TEST_URI || 'mongodb://localhost:27017/blog-teste');
});

// Limpar o banco de dados após os testes
afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
});

describe('Modelo de Post', () => {
  it('deve criar um novo post', async () => {
    const post = new Post({
      title: 'Post de Teste',
      content: 'Conteúdo de teste',
    });

    const savedPost = await post.save();
    expect(savedPost).toHaveProperty('_id');
    expect(savedPost.title).toBe('Post de Teste');
    expect(savedPost.content).toBe('Conteúdo de teste');
  });

  it('deve falhar ao criar um post sem título', async () => {
    const post = new Post({
      content: 'Conteúdo sem título',
    });

    try {
      await post.save();
    } catch (error) {
      expect(error).toHaveProperty('errors.title');
    }
  });

  it('deve encontrar um post por ID', async () => {
    const post = new Post({
      title: 'Post para buscar',
      content: 'Conteúdo de busca',
    });

    const savedPost = await post.save();
    const foundPost = await Post.findById(savedPost._id);

    expect(foundPost).toHaveProperty('_id', savedPost._id);
    expect(foundPost.title).toBe('Post para buscar');
  });

  it('deve atualizar um post', async () => {
    const post = new Post({
      title: 'Post a ser atualizado',
      content: 'Conteúdo original',
    });

    const savedPost = await post.save();
    savedPost.content = 'Conteúdo atualizado';
    const updatedPost = await savedPost.save();

    expect(updatedPost.content).toBe('Conteúdo atualizado');
  });

  it('deve excluir um post', async () => {
    const post = new Post({
      title: 'Post a ser excluído',
      content: 'Conteúdo de exclusão',
    });
  
    const savedPost = await post.save();
    await savedPost.deleteOne(); // Alteração aqui
  
    const foundPost = await Post.findById(savedPost._id);
    expect(foundPost).toBeNull();
  });
  
});
