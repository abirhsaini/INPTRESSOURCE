const express = require("express")
const { ConnectDB } = require("./db/connect.js")
const app = express()
const authRoute = require("./routes/authRoute")
var cors = require('cors');
app.use(cors());

const urlmongo = "mongodb://localhost:27017"
app.use(express.json())

app.use("/api/v1/auth", authRoute)
app.get("/", (req, res) => {
    res.send("welcome")

})
const start = async() => {
    await ConnectDB(urlmongo)
    app.listen("3001", (req, res) => {
        console.log("connected")
    })

}

start()