const repositories = (data) => {
  return data.map((repo) => ({
    name: repo.name,
    description: repo.description,
    updated_at: repo.updated_at,
    owner: repo.owner.login,
    id: repo.id,
  }));
};

module.exports = {
  repositories,
};
