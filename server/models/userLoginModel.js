const mongoose = require("mongoose");

//SCHEMA
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email_id: String,
    pwd: String
});

module.exports = mongoose.model('UserLogin', userSchema);