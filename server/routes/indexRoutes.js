const express = require('express');
const router = express.Router();
const indexCtrl = require("../controllers/indexController");

router.get('/', indexCtrl.getHomepage);
router.get('/account/:fname/', indexCtrl.getHomepageWithParams);

router.get('/signup', indexCtrl.getSignupPage);

router.get('/login', indexCtrl.getLoginPage);

router.get('/register', indexCtrl.getRegistrationPage);

module.exports = router;