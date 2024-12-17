# Blog API

Esta é uma API REST simples para um blog, organizada usando o padrão **MVC (Model-View-Controller)**.

## Estrutura de Pastas

- `controllers/`: Contém a lógica de controle da aplicação.
- `models/`: Responsável pela manipulação de dados.
- `routes/`: Define as rotas da API.

## Instruções de Execução

1. Clone o repositório:
   git clone https://github.com/JotavioS/Blog-API.git
   cd Blog-API

2. Instale as dependências:
    npm install

3. Execute a API:
    npm run start

## Fluxo de Trabalho: GitHub Flow

Neste projeto, utilizamos o **GitHub Flow**, que é um fluxo de trabalho simples e eficaz para desenvolvimento. A principal razão para escolher este fluxo é a simplicidade do projeto. 

### Como funciona:

1. **Branches**: Cada nova feature ou correção é desenvolvida em uma branch separada, o que mantém o código principal (branch `main`) estável.
2. **Commits**: Mudanças são feitas em commits pequenos e descritivos, facilitando o rastreamento das alterações.
3. **Pull Requests**: Após implementar e testar uma feature, um Pull Request é criado para revisão, permitindo que outros colaboradores comentem e revisem o código antes da mesclagem.
4. **Mesclagem**: Após aprovação, as alterações são mescladas na branch `main`, garantindo que o código esteja sempre pronto para produção.

Esse fluxo de trabalho ajuda a manter a organização e a colaboração em projetos simples e complexos.

## Configuração de Infraestrutura com Vagrant

### Pré-requisitos
1. Instale o [Vagrant](https://www.vagrantup.com/).
2. Instale o VirtualBox como provedor de máquinas virtuais.

### Passo a Passo para Configurar e Executar

1. Clone este repositório em sua máquina local:
    git clone https://github.com/JotavioS/Blog-API
    cd Blog-API

2. Inicialize e configure as máquinas virtuais

Após o provisionamento, a aplicação será executada automaticamente na VM2.

### Testando a Rota GET na VM1

1. Acesse a VM1:
    vagrant ssh vm1

2. Utilize curl ou wget para testar a rota GET. Por exemplo:
    curl http://192.168.33.11:8080/api/posts ou wget -qO- http://192.168.33.11:8080/api/posts