// routes.js
const express = require('express');
const router = express.Router();
const signUpController = require('../controller/user');

// Sign up route
router.post('/signup', signUpController.signUp);

module.exports = router;
