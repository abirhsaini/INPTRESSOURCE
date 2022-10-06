var express = require("express");
var mongoose = require("mongoose");
var bcript = require("bcryptjs")
const jwt = require("jsonwebtoken")

const JWT_Secret = "geguergjndgdnfgjfnfsdieapa3435334vgedffsgdbds"
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors())


const urlmongo = "mongodb://localhost:27017"

mongoose.connect(urlmongo, {
        useNewUrlParser: true
    }).then((console.log("connect to ")))
    .catch(e => console.log(e))

require("./userDetails");
const User = mongoose.model("userInfo")
app.post("/register", async(req, res) => {
    const [name, email, password, conPassword] = req.body;
    const cryptedPassword = await bcript.hash(password, 10)

    try {
        const oldUser = User.findOne({ email })
        console.log(oldUser)
        if (oldUser) {
            return console.log("no babe")

        }
        await User.create({
            name,
            email,
            password: cryptedPassword,
            conPassword,
        });
        res.send({ status: "ok" })

    } catch (error) {
        res.send({ status: "error" })


    }

})


app.post("/", async(req, res) => {

    const [email, password] = req.body;
    console.log({ email, password });

    const user = await User.findOne({ email });


    if (!user) {
        return res.json({ error: "User not found" });
    }
    console.log(await bcript.compare(password, user.password))
    if (await bcript.compare(password, user.password)) {
        const token = jwt.sign({}, JWT_Secret);

        if (res.status(201)) {

            return res.json({ status: "ok", data: token })
        } else res.json({ error: "error" })
    }
    res.json({ status: "erreur", error: "invalid Password" })
})
app.listen(3001, () => {
    console.log("server started")
})