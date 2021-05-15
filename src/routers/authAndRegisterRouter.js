const express = require('express');
const userController = require('../controllers/authAndRegisterController');

const authAndRegisterRouter = express.Router();

authAndRegisterRouter.post('/login', userController.auth);
authAndRegisterRouter.post('/register', userController.register);
authAndRegisterRouter.get('/verify', userController.verifyAccount);

module.exports = authAndRegisterRouter;
