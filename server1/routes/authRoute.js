var express = require('express');
const { login, register, getUserDetais } = require('../controller/AuthController');
var router = express.Router();





router.route("/").post(login)
router.route("/register").post(register)
router.route("/me").get(getUserDetais)


module.exports = router;