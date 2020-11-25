const { Octokit } = require("@octokit/rest")
const { cmd } = require('./utils')

async function getGHReleases(token) {
    const originUrl = (await cmd(`git config --get remote.origin.url`))
    const parts = originUrl.split('/')
    const repoName = parts[parts.length - 1].replace('.git', '').replace('\n', '')
    const ownerName = parts[parts.length - 2]
    const octokit = new Octokit({ auth: token })
    const releases = await octokit.request('GET /repos/{owner}/{repo}/releases', {
        owner: ownerName,
        repo: repoName
    })
    return releases
}

module.exports = {
    getGHReleases
}