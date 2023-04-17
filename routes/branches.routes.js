const router = require("express").Router();
const BranchesController = require("../controllers/branches.controller");

router.get("/", BranchesController.getBranches);

module.exports = router;
