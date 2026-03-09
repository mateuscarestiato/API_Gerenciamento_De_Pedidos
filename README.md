# API de Gerenciamento de Pedidos - Node.js & MongoDB

Desafio técnico para desenvolvimento de uma API REST para gestão de pedidos com transformação de dados (mapping).

## 🛠️ Tecnologias Utilizadas
- Node.js
- Express
- MongoDB (Mongoose)
- Dotenv (Variáveis de Ambiente)

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
