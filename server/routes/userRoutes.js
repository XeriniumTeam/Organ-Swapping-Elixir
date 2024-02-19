const express = require("express");
const router = express.Router();
const userCtrl = require('../controllers/userController');

//GET
router.get('/email/:email', userCtrl.getUserByEmail);
router.get('/reg/email/:email', userCtrl.getUserRegByEmail);
router.get('/match/bldgrp/:bld_grp/dbldgrp/:donor_bld_grp', userCtrl.getUsersWithParams);

//POST
router.post('/newUser', userCtrl.createUser);
router.post('/registerUser', userCtrl.createUserRegistration);

//UPDATE
//router.post('/updateUser', userCtrl.updateUser);

//DELETE

module.exports = router;