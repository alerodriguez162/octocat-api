// const { branches } = require("../models/Branches");
const { repositories } = require("../models/Repositories");
const { ghme } = require("../utils/githubClient");

const getRepositories = async (req, res) => {
  try {
    const gitRes = await ghme.reposAsync({ per_page: 100 });
    res.status(200).json({ repositories: repositories(gitRes[0]) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRepositories,
};
