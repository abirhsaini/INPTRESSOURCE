const User = require("../models/userDetails")

const register = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password })

        res.status(200).json({ user })


    } catch (error) {
        res.status(500).json({ msg: "pkk" })


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
    }


    res.status(200).json({ user })
}
module.exports = { login, register }