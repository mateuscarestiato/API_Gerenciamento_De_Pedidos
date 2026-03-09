const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Criar pedido
router.post('/', orderController.createOrder);

// Listar todos (deve vir antes do /:orderId)
router.get('/list', orderController.listOrders);

// Obter por número de pedido
router.get('/:orderId', orderController.getOrderById);

// Atualizar por número de pedido
router.put('/:orderId', orderController.updateOrder);

// Deletar por número de pedido
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;