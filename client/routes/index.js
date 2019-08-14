const router = require("express").Router();
const jobRoutes = require("./jobRoutes");
const userRoutes = require("./userRoutes");
const hireRoutes = require("./hireRoutes");
const path = require("path");

router.use(jobRoutes);
router.use(userRoutes);
router.use(hireRoutes);

module.exports = router; 

