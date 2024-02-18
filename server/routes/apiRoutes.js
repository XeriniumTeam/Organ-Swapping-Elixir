const express = require('express');
const router = express.Router();
const apiCtrl = require('../controllers/apiController');

router.post('/hla', apiCtrl.getHLACompatibility)

module.exports = router;