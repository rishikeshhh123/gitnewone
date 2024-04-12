// routes/items.js
const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

router.post('/add', itemsController.addItem);
router.get('/buy/:itemId', itemsController.getBuyButtons);
router.post('/buy/:itemId/:quantityToBuy', itemsController.handleBuy);

module.exports = router;
