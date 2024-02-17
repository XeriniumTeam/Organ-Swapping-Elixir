exports.getHomepage = (req, res) => {
    res.render('homepage');
}

exports.getHomepageWithParams = (req, res) => {
    res.render('homepage', {
        fname: req.params.fname,
    })
}

exports.getSignupPage = (req, res) => {
    res.render('signup');
}

exports.getLoginPage = (req, res) => {
    res.render('login');
}

exports.getRegistrationPage = (req, res) => {
    res.render('registration');
}