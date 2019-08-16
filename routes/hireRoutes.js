const router = require("express").Router();
const hireController = require("../controllers/hireController")

router.route("/hire")
    .post(hireController.create)
    .get(hireController.findAll);

router.route("/hire/:hireId")
    .delete(hireController.remove)

router.route("/hire/findAllHireWithDetail")
    .get(hireController.findAllHireWithDetail);

module.exports = router;