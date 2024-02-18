exports.getHomepage = (req, res) => {
    res.render('homepage');
}

exports.getHomepageWithParams = (req, res) => {
    res.render('homepage', {
        fname: req.params.fname,
        email: req.params.email
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

exports.getDashboardPage = async (req, res) => {


        const response = await fetch(`http://localhost:5000/user/email/${req.params.email}`, {
            method: 'GET'
        })

        const user = await response.json()

        if(user){

            const response_2 = await fetch(`http://localhost:5000/user/reg/email/${user["email_id"]}`, {
                method: 'GET'
            })

            const data = await response_2.json();

            res.render('dashboard', {
                fname: req.params.fname,
                data: data
            })
        }
        else {
            
            res.status(403).json({msg: "Forbidden"});
        }


}