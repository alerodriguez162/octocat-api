const router = require("express").Router();
const PullsController = require("../controllers/pulls.controller");

router.get("/", PullsController.getPulls);
router.post("/compare", PullsController.compareBranches);
router.post("/create", PullsController.createPull);
router.post("/merge", PullsController.mergeBranches);
router.post("/close/:prId", PullsController.closePull);

module.exports = router;
