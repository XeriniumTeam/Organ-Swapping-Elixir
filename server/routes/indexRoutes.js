const express = require('express');
const router = express.Router();
const indexCtrl = require("../controllers/indexController");

router.get('/', indexCtrl.getHomepage);

router.get('/signup', indexCtrl.getSignupPage)

module.exports = router;