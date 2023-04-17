const { branches } = require("../models/Branches");
const { ghRepo } = require("../utils/githubClient");

const getBranches = async (req, res) => {
  const { reponame } = req.headers;
  try {
    const gitRes = await ghRepo(reponame).branchesAsync();
    res.status(200).json({ branches: branches(gitRes[0]) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBranches,
};
