const router = require("express").Router();
const CommitsController = require("../controllers/commits.controller");

router.get("/:branchName", CommitsController.branchCommits);
router.get("/single/:sha", CommitsController.getDetailCommit);

module.exports = router;
