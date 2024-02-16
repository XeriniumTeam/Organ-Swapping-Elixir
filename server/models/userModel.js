const mongoose = require("mongoose");

//SCHEMA
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email_id: String,
    password: String,
    Adhar_No: Number,
    Organ: String,
    Age:Number,
    Blood_group:String,
    Donor:[{
        full_name: String, 
        Age: Number,
        Adhar_No:Number,
        Organ:String,
        Blood_group:String
    }]
});

module.exports = mongoose.model('User', userSchema);