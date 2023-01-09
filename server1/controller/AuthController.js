const User = require("../models/userDetails")
const jwt = require("jsonwebtoken")




var isconnected = false;


const register = async(req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const token = jwt.sign({
            name: name,
            email: email

        }, "secret123")
        const user = await User.create({ name, email, password, role, token })
        res.status(200).json({ user })


    } catch (error) {
        res.status(500).json({ msg: "pkk" })


    }

}
const getUserDetais = async(req, res) => {
    try {

        if (isconnected) {


            const user = await User.findById({ _id: req.session.user_id })

            //res.status(200).json({ user })
        } else { res.status(500).json({ msg: "no mabritch" }) }
    } catch {

        res.status(500).json({ msg: "invalid credentials" })

    }
}

const login = async(req, res) => {
    const { email, password } = req.body;
    console.log(email, password)

    if (!email || !password) {
        res.status(500).json({ msg: "Please provide all values" })

    }
    const user = await User.findOne({ email }).select('+password')
    if (!user) {
        res.status(500).json({ msg: "invalid credentials" })
    }
    const isCorrect = await user.comparePassword(password)
    console.log(isCorrect)
    if (!isCorrect) {
        res.status(500).json({ msg: "Please provide all values" })
    } else {
        res.status(200).json({ user })
        isconnected = true;
    }
}

module.exports = { login, register, getUserDetais }