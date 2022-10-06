const mongoose = require("mongoose");
const UserDetailsSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    conPassword: String
}, {
    collection: "userInfo",
});
mongoose.model("userInfo", UserDetailsSchema)