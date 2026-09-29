# Hamburgueria — Sistema de Pedidos

Aplicação web full stack para cadastro e gerenciamento de pedidos de uma hamburgueria.
O cliente monta o lanche escolhendo pão, queijo, hambúrguer e acompanhamento, e os pedidos
ficam salvos em um banco MySQL, podendo ser listados e excluídos.

Projeto desenvolvido na disciplina de Programação Full Stack do curso de
Análise e Desenvolvimento de Sistemas (Unoeste).

## Funcionalidades

- Cadastro de pedidos com nome, endereço e montagem do lanche
- Listagem de todos os pedidos realizados
- Exclusão de pedidos
- Opções de pão, queijo, hambúrguer e acompanhamento carregadas do banco de dados

## Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)

- **Back-end:** Node.js, Express
- **Front-end:** EJS, express-ejs-layouts, Bootstrap, Font Awesome
- **Banco de dados:** MySQL (mysql2)
- **Arquitetura:** MVC (models, views, controllers, routes)

## Estrutura

```
├── controllers/   -> regras de negócio e respostas das rotas
├── models/        -> acesso às tabelas do banco (pedido, pão, queijo, hambúrguer, acompanhamento)
├── routes/        -> definição das rotas (/ e /pedido)
├── utils/         -> conexão com o banco (database.js)
├── views/         -> páginas EJS
├── public/        -> CSS, JS e imagens
└── server.js      -> ponto de entrada da aplicação
```

## Como executar

1. Clone o repositório e instale as dependências:
   ```bash
   npm install
   ```
2. Copie o arquivo `.env.example` para `.env` e preencha com os dados do seu banco MySQL.
3. Inicie o servidor:
   ```bash
   node server.js
   ```
4. Acesse `http://localhost:5000`

## Banco de dados

Tabelas utilizadas: `tb_pedido`, `tb_pao`, `tb_queijo`, `tb_hamburguer`, `tb_acompanhamento`.

---

Desenvolvido por **Pedro Mazaro** — [GitHub](https://github.com/mazaroo)
