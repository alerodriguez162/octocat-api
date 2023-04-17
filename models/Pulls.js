const pulls = (data) => {
  return data.map((pr) => ({
    title: pr.title,
    description: pr.body,
    state: pr.state,
    merged: pr.merged_at,
    number: pr.number,
    author: pr.user.login,
    date: pr.created_at,
  }));
};

const comparePr = (data) => {
  return data.files.map((file) => ({
    sha: file.sha,
    filename: file.filename,
    status: file.status,
    additions: file.additions,
    deletions: file.deletions,
    changes: file.changes,
    patch: file.patch,
  }));
};

module.exports = {
  pulls,
  comparePr,
};
