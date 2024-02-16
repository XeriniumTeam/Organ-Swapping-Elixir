const express = require("express");
const router = express.Router();
const userCtrl = require('../controllers/userController');

//GET
router.get('/:email', userCtrl.getUserByEmail);

//POST
router.post('/newuser', userCtrl.createUser);
//UPDATE
router.update('/update', userCtrl.updateUser)
//DELETE

module.exports = router;