const connection = require('./')

module.exports = {
  createOrder,
  getOrders
}

function createOrder (order, db = connection) {
  return db('orders')
    .insert(order)
}

function getOrders (db = connection) {
  return db('orders')
    .join('users', 'orders.user_id', 'users.id')
    .join('tools', 'orders.tool_id', 'tools.id')
    .select('orders.id',
      'orders.notes',
      'orders.status',
      'users.first_name as firstName',
      'users.last_name as lastName',
      'users.email',
      'users.phone',
      'tools.name as tool',
      'tools.id as toolId',
      'tools.category_id as category'
    )
}
