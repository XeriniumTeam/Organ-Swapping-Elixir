const express = require("express");
const router = express.Router();
const userCtrl = require('../controllers/userController');

//GET
router.get('/:email', userCtrl.getUserByEmail);

//POST
router.post('/newUser', userCtrl.createUser);

//UPDATE
router.post('/updateUser', userCtrl.updateUser);

//DELETE

module.exports = router;