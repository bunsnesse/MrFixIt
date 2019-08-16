const router = require("express").Router();
const userInfoController = require("../controllers/userInfoController")

router.route("/userinfo")
    .get(userInfoController.userInfo);


module.exports= router