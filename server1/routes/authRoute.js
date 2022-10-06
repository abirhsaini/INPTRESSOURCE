var express = require('express');
const { login, register } = require('../controller/AuthController');
var router = express.Router();


router.route("/").post(login)
router.route("/register").post(register)

module.exports = router;