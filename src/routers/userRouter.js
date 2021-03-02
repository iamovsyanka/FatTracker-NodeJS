const express = require('express');
const userController = require('../controllers/userController');
const multer = require('multer');

const userRouter = express.Router();

userRouter.put('/updateInfo', userController.updateInformation);
userRouter.put('/updatePhoto', multer().single('photo'), userController.updatePhoto);

module.exports = userRouter;
