const mongoose = require("mongoose");

//SCHEMA
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email_id: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);