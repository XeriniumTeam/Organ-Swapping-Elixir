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
        const response = await  new User({
            first_name: req.body.fname,
            last_name: req.body.lname,
            email_id : req.body.email,
            password: req.body.pwd
        });
        console.log("User Added");
    }
    catch(error){
        res.status(500).json({msg : error.message});
    }
};

exports.updateUser = async(req, res)=>{
    try{
        const response = await User.findByIdAndUpdate(req.body.email_id, {
            Adhar_No: req.body.A_no,
            Organ: req.body.Organ,
            Age:req.body.age,
            Blood_group:req.body.B_group,
            Donor:[{
                full_name: req.body.f_name, 
                Age: req.body.age,
                Adhar_No:req.body.A_no,
                Organ:req.body.Organ,
                Blood_group:req.body.B_group
            }]
        }, {new: true})
        .then();

    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
};