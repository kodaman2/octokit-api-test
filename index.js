const Octokit = require("@octokit/rest");


const octokit = new Octokit({
    baseUrl: "https://github.ncsu.edu/api/v3",
});

octokit.authenticate({
    type: 'token',
    token: 'paste-token-here',
});

octokit.gists.getAll().then((res) => {
    console.log(res);
});