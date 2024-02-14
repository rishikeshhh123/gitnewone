// controllers/itemsController.js
const Item = require('../models/item');

exports.addItem = (req, res, next) => {
  const { name, description, price, quantity } = req.body;
  const newItem = new Item(name, description, price, quantity);

  Item.addItem(newItem)
    .then(() => {
      res.redirect('/'); // Redirect to the dashboard or wherever you want after adding an item
    })
    .catch(err => console.log(err));
};

exports.getBuyButtons = (req, res, next) => {
  const itemId = req.params.itemId;

  // Fetch item from the database
  Item.getItemById(itemId)
    .then(([item]) => {
      res.render('buyButtons', { item });
    })
    .catch(err => console.log(err));
};

exports.handleBuy = (req, res, next) => {
  const itemId = req.params.itemId;
  const quantityToBuy = req.params.quantityToBuy;

  // Fetch item from the database
  Item.getItemById(itemId)
    .then(([item]) => {
      const newQuantity = item[0].quantity - quantityToBuy;

      // Update the quantity in the database
      Item.updateQuantity(itemId, newQuantity)
        .then(() => {
          res.redirect('/'); // Redirect to the dashboard or wherever you want after buying
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};
