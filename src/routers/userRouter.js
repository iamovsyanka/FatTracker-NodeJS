const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/update', userController.updateHeightAndWeight);

module.exports = userRouter;
