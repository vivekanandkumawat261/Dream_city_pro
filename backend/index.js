require('dotenv').config()
const express = require('express')
 
const app = express()
const port = process.env.PORT || 4000

const githubData =  {
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('vivekanand kumawat')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/api/jokes', (req, res) => {
      const jokes = [
        {
            id: "1",
            title: "title1",
            content: "content1"
        }, 
        {
            id: "1",
            title: "title1",
            content: "content1"
        }, 
        {
            id: "1",
            title: "title1",
            content: "content1"
        }, 
        {
            id: "1",
            title: "title1",
            content: "content1"
        }, 
        {
            id: "1",
            title: "title1",
            content: "content1"
        } 
      ];
      res.send(jokes);
});

app.listen(port, () => {
  console.log(`Your server running on port http://localhost:${port}`)
})