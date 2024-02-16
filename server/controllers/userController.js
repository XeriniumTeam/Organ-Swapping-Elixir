const User = require('../models/userModel');


exports.getUserByEmail = async (req, res) => {
    try {
        const user = await User.findById(req.params.email);
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
        const response = await User.insertOne({
            first_name: req.body.fname,
            last_name: req.body.lname,
            email_id : req.body.email,
            password: req.body.pwd
        });
    }
    catch(error){
        res.status(500).json({msg : error.message});
    }
};

exports.updateUser = async(req, res)=>{
    try{

    }
};