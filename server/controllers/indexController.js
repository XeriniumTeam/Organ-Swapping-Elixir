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
                    donor_bld_grp: "NA",
                    data: data
                })
            }
        }
        else {
            
            res.status(403).json({msg: "Forbidden"});
        }


}

const jsonData = {
    "family_1" : {
        "donor": {
            "name":"Ushnish",
            "genes": {
                "A":["02:01:01G","74:03:01G"],
                "B":["15:25:01G","53:01:01G"],
                "C":["15:25:01G","53:01:01G"],
                "DRB1":["03:01:01G","12:01:02G"],
                "DRB345":["23:01:01G","33:01:01G"],
                "DQB1":["05:01:01","05:01:01G"],
                "DQA1":["03:01:01G","02:02:02G"],
                "DPB1":["08:01:01G","08:01:01G"],
                "DPA1":["02:01:01G","06:01:01G"]
            }
        },
        "recipient":{
            "name": "Urvashi",
            "genes": {
                "A":["74:03:01G","02:01:01G"],
                "B":["16:27:01G","51:01:01G"],
                "C":["15:25:01G","53:01:01G"],
                "DRB1":["01:01:01G","12:01:02G"],
                "DRB345":["25:01:01G","40:01:01G"],
                "DQB1":["04:01:01","08:01:01G"],
                "DQA1":["03:01:01G","02:02:02G"],
                "DPB1":["08:01:01G","08:01:01G"],
                "DPA1":["02:01:01G","09:01:01G"]
            }
        }
    },
    "family_2" : {
        "donor":{
            "name":"Vinita",
            "genes": {
                "A":["01:01:01","02:03:03G"],
                "B":["55:05:01G","53:05:01G"],
                "C":["16:25:01G","54:01:01G"],
                "DRB1":["01:01:01G","03:01:02G"],
                "DRB345":["30:01:01G","32:01:01G"],
                "DQB1":["17:27:01G","56:01:01G"],
                "DQA1":["15:25:01G","53:01:01G"],
                "DPB1":["23:01:01G","33:01:01G"],
                "DPA1":["02:01:01G","06:01:01G"]
            }
        },
        "recipient":{
            "name": "Monika",
            "genes": {
                "A":["01:01:01","02:03:03G"],
                "B":["05:05:01G","53:05:01G"],
                "C":["11:25:01G","55:01:01G"],
                "DRB1":["01:01:04G","02:01:01G"],
                "DRB345":["32:01:01G","30:01:01"],
                "DQB1":["19:27:01G","56:01:01G"],
                "DQA1":["02:01:01G","06:01:01G"],
                "DPB1":["23:01:01G","33:01:01G"],
                "DPA1":["02:01:01G",]
            }
        }
    }
}

exports.getHlaForm = (req, res) => {
    res.render('hla', {
        genesDonor: jsonData["family_1"]["donor"]["genes"],
        genesRecipient: jsonData["family_1"]["recipient"]["genes"]
    });
}