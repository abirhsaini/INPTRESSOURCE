const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const JWT_Secret = "geguergjndgdnfgjfnfsdieapa3435334vgedffsgdbds"
const Jwt_LifeTime = "1d"

const UserDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide name"],
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email adress"
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        select: false
    },
}, {
    collection: "userInfo",
});

UserDetailsSchema.pre("save", async function() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})


UserDetailsSchema.methods.CreateJWT = function() {
    return jwt.sign({ userId: this._id }, JWT_Secret, { expiresIn: Jwt_LifeTime })
}

UserDetailsSchema.methods.comparePassword = async function(candidate) {
    const isMatch = await bcrypt.compare(candidate, this.password)
    return isMatch
}
module.exports = mongoose.model("userInfo", UserDetailsSchema)