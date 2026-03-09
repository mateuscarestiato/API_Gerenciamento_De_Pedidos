const Order = require('../models/Order');

class OrderService {
  // Transforma o JSON de entrada para o formato do Banco de Dados
  transformOrder(data) {
    return {
      // Requisito: v10089015vdb-01 vira v10089015vdb
      orderId: data.numeroPedido.includes('-') ? data.numeroPedido.split('-')[0] : data.numeroPedido,
      value: data.valorTotal,
      creationDate: data.dataCriacao ? new Date(data.dataCriacao) : new Date(),
      items: (data.items || []).map(item => ({
        productId: parseInt(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    };
  }

  async create(orderData) {
    const mappedData = this.transformOrder(orderData);
    const order = new Order(mappedData);
    return await order.save();
  }
}

module.exports = new OrderService();