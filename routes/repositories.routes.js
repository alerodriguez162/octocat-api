const router = require("express").Router();
const RepositoriesController = require("../controllers/repositories.controller");

router.get("/", RepositoriesController.getRepositories);

module.exports = router;
