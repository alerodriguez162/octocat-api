var octonode = require("octonode");

var octocatClient = octonode.client(process.env.TOKEN);

const ghRepo = (repoName) => octocatClient.repo(repoName);

const ghPR = (repoName, pull) => octocatClient.pr(repoName, pull);

const ghme = octocatClient.me();

module.exports = {
  ghRepo,
  ghPR,
  ghme,
};
