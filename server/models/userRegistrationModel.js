const mongoose = require("mongoose");

//SCHEMA
const userSchema = new mongoose.Schema({
    email_id: String,
    aadhar_no: Number,
    organ: String,
    age:Number,
    bld_grp:String,
    donor:[{
        full_name: String, 
        age: Number,
        aadhar_no:Number,
        organ:String,
        bld_grp:String
    }]
});

module.exports = mongoose.model('UserRegistration', userSchema);