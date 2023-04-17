const { commits, commit } = require("../models/Commits");
const { ghRepo } = require("../utils/githubClient");

const branchCommits = async (req, res) => {
  const { branchName } = req.params;
  const { reponame } = req.headers;
  try {
    const gitRes = await ghRepo(reponame).commitsAsync(branchName);
    res.status(200).json({ commits: commits(gitRes[0]) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDetailCommit = async (req, res) => {
  const { sha } = req.params;
  const { reponame } = req.headers;
  try {
    const gitRes = await ghRepo(reponame).commitAsync(sha);
    res.status(200).json({ commit: commit(gitRes[0]) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  branchCommits,
  getDetailCommit,
};
