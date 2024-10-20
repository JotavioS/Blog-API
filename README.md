# Blog API

Esta é uma API REST simples para um blog, organizada usando o padrão **MVC (Model-View-Controller)**.

## Estrutura de Pastas

- `controllers/`: Contém a lógica de controle da aplicação.
- `models/`: Responsável pela manipulação de dados.
- `routes/`: Define as rotas da API.
- `data/posts.json`: Armazena os posts.

## Instruções de Execução

1. Clone o repositório:
   git clone https://github.com/JotavioS/Blog-API.git
   cd blog-api

2. Instale as dependências:
    npm install

3. Execute a API:
    node server.js

## Fluxo de Trabalho: GitHub Flow

Neste projeto, utilizamos o **GitHub Flow**, que é um fluxo de trabalho simples e eficaz para desenvolvimento. A principal razão para escolher este fluxo é a simplicidade do projeto. 

### Como funciona:

1. **Branches**: Cada nova feature ou correção é desenvolvida em uma branch separada, o que mantém o código principal (branch `main`) estável.
2. **Commits**: Mudanças são feitas em commits pequenos e descritivos, facilitando o rastreamento das alterações.
3. **Pull Requests**: Após implementar e testar uma feature, um Pull Request é criado para revisão, permitindo que outros colaboradores comentem e revisem o código antes da mesclagem.
4. **Mesclagem**: Após aprovação, as alterações são mescladas na branch `main`, garantindo que o código esteja sempre pronto para produção.

Esse fluxo de trabalho ajuda a manter a organização e a colaboração em projetos simples e complexos.