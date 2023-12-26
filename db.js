const mongoose = require("mongoose");
const { stringify } = require("querystring");

mongoose.connect("mongodb+srv://y8107271711:mongoyogi@cluster0.azoxcns.mongodb.net/")

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
})

const user = mongoose.model('user', userSchema);

module.exports = user;