const express = require('express');
const userController = require('../controllers/userController');
const multer = require('multer');

const userRouter = express.Router();

userRouter.get('/getInfo', userController.getInfo);
userRouter.put('/updateInfo', userController.updateInformation);
userRouter.put('/updatePhoto', multer().single('photo'), userController.updatePhoto);
userRouter.delete('/delete', userController.deleteUser);

module.exports = userRouter;
