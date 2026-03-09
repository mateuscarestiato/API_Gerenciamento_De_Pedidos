# 📦 API de Gerenciamento de Pedidos - Node.js & MongoDB

Esta é uma API REST desenvolvida em **Node.js** para o gerenciamento de pedidos, criada como parte de um desafio técnico. A aplicação demonstra o uso de arquitetura em camadas, persistência em banco de dados NoSQL e a implementação de uma lógica de **Data Mapping** (Transformação de Dados).

## 🛠️ Tecnologias Utilizadas
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🎯 O Desafio
O objetivo foi construir uma API capaz de gerenciar pedidos (CRUD completo), mas que aceitasse um formato de entrada amigável ao usuário e o transformasse automaticamente para um esquema técnico otimizado antes de salvar no **MongoDB**.

## 🏗️ Arquitetura do Sistema
A estrutura do projeto foi organizada seguindo o princípio de separação de responsabilidades:

```text
/
├── SRC/
│   ├── config/      # Configuração da conexão com MongoDB (Mongoose)
│   ├── controllers/ # Orquestração das requisições e respostas HTTP
│   ├── models/      # Definição dos Schemas e modelos de dados
│   ├── routes/      # Definição das rotas e endpoints
│   └── services/    # Lógica de negócio e o mapeador de dados (Mapping)
├── .env             # Variáveis de ambiente (excluído do Git por segurança)
├── .gitignore       # Proteção para node_modules e .env
├── package.json     # Gerenciador de dependências e scripts
└── server.js        # Ponto de entrada (inicialização do servidor)
```

### 🔄 Regras de Mapping (Transformação)
A API processa o JSON recebido e realiza as seguintes conversões:
- `numeroPedido` (ex: v10089015vdb-01) ➡️ `orderId` (ex: v10089015vdb)
- `valorTotal` ➡️ `value`
- `dataCriacao` ➡️ `creationDate` (Convertido para objeto Date)
- `items.idItem` ➡️ `items.productId` (Convertido para Number)
- `items.quantidadeItem` ➡️ `items.quantity`
- `items.valorItem` ➡️ `items.price`

## 📌 Funcionalidades e Mapping
A API recebe um JSON de entrada e realiza o mapeamento para os padrões do banco de dados:
- `numeroPedido` -> `orderId`
- `valorTotal` -> `value`
- `items.idItem` -> `items.productId`

## 🚀 Como Rodar o Projeto
1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure o arquivo `.env` com sua `MONGO_URI` e `PORT`.
4. Inicie o servidor: `npm run dev` ou `node server.js`.

## 🛣️ Endpoints
- **POST** `/order` - Cria um novo pedido.
- **GET** `/order/list` - Lista todos os pedidos.
- **GET** `/order/:orderId` - Busca pedido por ID.
- **PUT** `/order/:orderId` - Atualiza um pedido.
- **DELETE** `/order/:orderId` - Remove um pedido.
