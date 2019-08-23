const router = require("express").Router();
const jobRoutes = require("./jobRoutes");
const userRoutes = require("./userRoutes");
const hireRoutes = require("./hireRoutes");
const userInfoRoutes = require("./userInfoRoutes");
const path = require("path");
const jwt = require("jsonwebtoken");

router.use(userRoutes);

router.use((req, res, next) => {
    try {
        // check the token
        console.log(req);

        let token = req.headers.token;
        let decoded = jwt.verify(token, "igor");
        let userId = decoded.id;
        req.userId = userId;
        next();
    } catch (error) {
        throw new Error(error);
    }


})
router.use(userInfoRoutes);
router.use(jobRoutes);
router.use(hireRoutes);

router.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

module.exports = router;

