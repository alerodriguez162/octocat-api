const branches = (data) => {
  return data.map((branch) => ({
    name: branch.name,
    commit: branch.commit.sha,
  }));
};

module.exports = {
  branches,
};
