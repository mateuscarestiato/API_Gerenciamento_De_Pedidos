const Order = require('../models/Order');
const OrderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
  try {
    const order = await OrderService.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar pedido", details: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    if (!order) return res.status(404).json({ message: "Pedido não encontrado" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Erro ao listar pedidos" });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { orderId: req.params.orderId },
      req.body,
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Pedido não encontrado" });
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({ orderId: req.params.orderId });
    if (!order) return res.status(404).json({ message: "Pedido não encontrado" });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar" });
  }
};