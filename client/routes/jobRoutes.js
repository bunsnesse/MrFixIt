const router = require("express").Router();
const jobController = require("../controllers/jobController")


router.route("/jobs")
    .post(jobController.create)
    .get(jobController.findAll);

router.route("/findHandyman")
    .get(jobController.findHandyman)

router.route("/findGroceries")
    .get(jobController.findGroceries)

router.route("/findCleaners")
    .get(jobController.findCleaners)
    
router.route("/findYardworkers")
    .get(jobController.findYardwork);

router.route("/view")
    .get(jobController.findAll);
    
module.exports = router;