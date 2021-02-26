const express = require('express');
const userController = require('../controllers/authAndRegisterController');

const authAndRegisterRouter = express.Router();

authAndRegisterRouter.post('/login', userController.authUser);
authAndRegisterRouter.post('/register', userController.registerUser);

module.exports = authAndRegisterRouter;
