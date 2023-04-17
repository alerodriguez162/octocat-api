const commits = (data) => {
  return data.map((commit) => ({
    sha: commit.sha,
    author: commit.commit.author.name,
    message: commit.commit.message,
    date: commit.commit.author.date,
  }));
};

const commit = (data) => {
  return {
    sha: data.sha,
    author: data.commit.author.name,
    author_email: data.commit.author.email,
    total: data.stats.total,
    additions: data.stats.additions,
    deletions: data.stats.deletions,
    message: data.commit.message,
    date: data.commit.author.date,
    files: data.files.map((file) => ({
      sha: file.sha,
      additions: file.additions,
      deletions: file.deletions,
      changes: file.changes,
      filename: file.filename,
      status: file.status,
    })),
  };
};

module.exports = {
  commits,
  commit,
};
