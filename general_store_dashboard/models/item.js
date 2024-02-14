// models/item.js
const db = require('../util/database');

class Item {
  constructor(name, description, price, quantity) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
  static createTable() {
    return db.execute(`
      CREATE TABLE IF NOT EXISTS Items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        quantity INT NOT NULL
      )
    `);
  }

  static addItem(item) {
    return db.execute('INSERT INTO Items (name, description, price, quantity) VALUES (?, ?, ?, ?)',
      [item.name, item.description, item.price, item.quantity]);
  }

  static getItemById(itemId) {
    return db.execute('SELECT * FROM Items WHERE id = ?', [itemId]);
  }

  static updateQuantity(itemId, newQuantity) {
    return db.execute('UPDATE Items SET quantity = ? WHERE id = ?', [newQuantity, itemId]);
  }
  static getAllItems() {
    return db.execute('SELECT * FROM Items');
  }
}

module.exports = Item;
