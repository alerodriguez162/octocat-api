const express = require("express");
const app = express();

require("dotenv/config");
require("./config")(app);

const commitsRoute = require("./routes/commits.routes");
app.use("/commits", commitsRoute);


const branchesRoute = require("./routes/branches.routes");
app.use("/branches", branchesRoute);

const repositoriesRoute = require("./routes/repositories.routes");
app.use("/repositories", repositoriesRoute);

const pullsRoute = require("./routes/pulls.routes");
app.use("/pulls", pullsRoute);

module.exports = app;
