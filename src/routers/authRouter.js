const express = require('express');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post('/login', authController.authUser);

module.exports = authRouter;
