const { branches } = require("../models/Branches");
const { pulls, comparePr } = require("../models/Pulls");
const { ghRepo, ghPR } = require("../utils/githubClient");

const getPulls = async (req, res) => {
  const { reponame } = req.headers;

  try {
    const gitRes = await ghRepo(reponame).prsAsync({ state: "all" });
    res.status(200).json({ pulls: pulls(gitRes[0]) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const compareBranches = async (req, res) => {
  const { reponame } = req.headers;
  const { compare, base } = req.body;

  try {
    const gitRes = await ghRepo(reponame).compareAsync(base, compare);
    res.status(200).json({ files: comparePr(gitRes[0]) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPull = async (req, res) => {
  const { reponame } = req.headers;
  const { title, description, compare, base, user } = req.body;
  try {
    await ghRepo(reponame).createPrAsync({ title: title, body: description, head: `${user}:${compare}`, base: base });
    res.status(200).json({ status: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const mergeBranches = async (req, res) => {
  const { reponame } = req.headers;
  const { base, compare } = req.body;

  try {
    const gitRes = await ghRepo(reponame).mergeAsync({ base: base, head: compare });
    res.status(200).json({ status: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const closePull = async (req, res) => {
  const { reponame } = req.headers;
  const { prId } = req.params;

  try {
    await ghPR(reponame, prId).closeAsync();
    res.status(200).json({ status: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPulls,
  compareBranches,
  createPull,
  mergeBranches,
  closePull,
};
