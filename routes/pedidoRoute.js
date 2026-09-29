const express = require('express');
const PedidoController = require('../controllers/pedidoController');

const router = express.Router();

let ctrl = new PedidoController();
router.get('/', ctrl.listagemView);
router.get('/cadastrar', ctrl.cadastrarView);
router.post('/cadastrar', ctrl.cadastrar);
router.post('/excluir', ctrl.excluir);

module.exports = router;