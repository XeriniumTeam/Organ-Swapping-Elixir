const mongoose = require("mongoose");

//SCHEMA

const donorSchema = new mongoose.Schema({
    donor_first_name: String,
    donor_age: Number,
    donor_aadhar_card_no: Number,
    donor_organ:String,
    donor_bld_grp:String
});

const userSchema = new mongoose.Schema({
    email_id: String,
    aadhar_no: Number,
    organ: String,
    age:Number,
    bld_grp:String,
    donor: donorSchema
});

module.exports = mongoose.model('UserRegistration', userSchema);
