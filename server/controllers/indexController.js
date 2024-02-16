exports.getHomepage = (req, res) => {
    res.render('homepage', {
        name: req.body.name,
        email: req.body.email
    });
}

exports.getSignupPage = (req, res) => {
    res.render('signup');
}