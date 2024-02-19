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
            if(data){
                res.render('dashboard', {
                    fname: user["first_name"],
                    lname: user["last_name"],
                    email_id: user["email_id"],
                    aadhar_no: data["aadhar_no"],
                    bld_grp: data["bld_grp"],
                    donor_fname: data["donor"]["donor_first_name"],
                    donor_aadhar: data["donor"]["donor_aadhar_card_no"],
                    donor_age: data["donor"]["donor_age"],
                    donor_bld_grp: data["donor"]["donor_bld_grp"],
                    data: data
                })
            }
            else {
                res.render('dashboard', {
                    fname: user["first_name"],
                    lname: user["last_name"],
                    email_id: user["email_id"],
                    aadhar_no: "NA",
                    bld_grp: "NA",
                    donor_fname: "NA",
                    donor_aadhar: "NA",
                    donor_age: "NA",
                    donor_bld_grp: "NA"
                })
            }
        }
        else {
            
            res.status(403).json({msg: "Forbidden"});
        }


}