const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/getInfo', userController.getInfo);
userRouter.put('/updateInfo', userController.updateInformation);
userRouter.delete('/delete', userController.deleteUser);

module.exports = userRouter;
