const db = require("../models");

// Defining methods for the helpController
module.exports = {
    userInfo: async function (req, res) {
        let id = req.userId;
        let user = await db.User.findById(id);
        let userObj = user.toObject();
        delete userObj.password;
        return res.json(userObj);
    },
};