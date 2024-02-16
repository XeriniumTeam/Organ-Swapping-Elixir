const UserLogin = require('../models/userLoginModel');
const UserRegistration = require('../models/userRegistrationModel');


exports.getUserByEmail = async (req, res) => {
    try {
        const user = await UserLogin.findById(req.params.email);
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

exports.updateUser = async(req, res)=>{
    try{


    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
};