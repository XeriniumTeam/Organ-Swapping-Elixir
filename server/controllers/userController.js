const UserLogin = require('../models/userLoginModel');
const UserRegistration = require('../models/userRegistrationModel');


exports.getUserByEmail = async (req, res) => {
    try {
        const user = await UserLogin.findOne({email_id : req.params.email});
        if(!user){
            return res.status(404).json({msg: "User Not Found"});
        }
        res.json(user)
    }
    catch(error) {
        res.status(500).json({err: error.message});
    }
};

exports.createUser = async (req, res) => {
    try {
        const {first_name, last_name, email_id, pwd} = req.body;
        // console.log(first_name+last_name+email_id+pwd);
        const user = new UserLogin({
            first_name: first_name,
            last_name: last_name,
            email_id: email_id,
            pwd: pwd
        });
        const savedUser = await user.save();
        res.status(201).json(savedUser);
        console.log(savedUser);
        console.log("User Added");
    }
    catch(error){
        res.status(500).json({msg : error.message});
    }
};

exports.createUserRegistration = async(req, res)=>{
    try{

        const {email_id, aadhar_no, organ, age, bld_grp, donor_fname, donor_age, donor_aadhar_card_no, donor_organ, donor_bld_grp} =  req.body;

        const user = new UserRegistration({
            email_id : email_id,
            aadhar_no : aadhar_no,
            organ: organ,
            age: age,
            bld_grp : bld_grp,
            donor:{
                donor_first_name: donor_fname,
                donor_age : donor_age,
                donor_aadhar_card_no:donor_aadhar_card_no,
                donor_organ:donor_organ,
                donor_bld_grp:donor_bld_grp
            }
        })

        const savedUser = await user.save();
        res.status(201).json(savedUser);
        console.log(savedUser);
        console.log("User Added");        
    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
};