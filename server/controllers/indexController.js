exports.getHomepage = (req, res) => {
    res.render('homepage', {
        fname: req.body.fname,
        email: req.body.email
    });
}

exports.getSignupPage = (req, res) => {
    res.render('signup');
}