const express = require("express");
const router = express.Router();
const userCtrl = require('../controllers/userController');

//GET
router.get('/email/:email', userCtrl.getUserByEmail);

//POST
router.post('/newUser', userCtrl.createUser);
router.post('/registerUser', userCtrl.createUserRegistration)

//UPDATE
//router.post('/updateUser', userCtrl.updateUser);

//DELETE

module.exports = router;