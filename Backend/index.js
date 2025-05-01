const express = require("express")
require("dotenv").config()

// const githubData = {
//     "login": "Aman7902K",
//     "id": 112843283,
//     "node_id": "U_kgDOBrnaEw",
//     "avatar_url": "https://avatars.githubusercontent.com/u/112843283?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Aman7902K",
//     "html_url": "https://github.com/Aman7902K",
//     "followers_url": "https://api.github.com/users/Aman7902K/followers",
//     "following_url": "https://api.github.com/users/Aman7902K/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Aman7902K/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Aman7902K/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Aman7902K/subscriptions",
//     "organizations_url": "https://api.github.com/users/Aman7902K/orgs",
//     "repos_url": "https://api.github.com/users/Aman7902K/repos",
//     "events_url": "https://api.github.com/users/Aman7902K/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Aman7902K/received_events",
//     "type": "User",
//     "user_view_type": "public",
//     "site_admin": false,
//     "name": "Aman Khan",
//     "company": null,
//     "blog": "",
//     "location": "India",
//     "email": null,
//     "hireable": null,
//     "bio": "👋 Hi, I'm Aman!\r\n\r\n💻 Full-Stack Web Developer  \r\n \r\n**Frontend**: React, Tailwind CSS  \r\n\r\n**Backend**: Express.js, Basic Node.js",
//     "twitter_username": null,
//     "public_repos": 14,
//     "public_gists": 0,
//     "followers": 4,
//     "following": 6,
//     "created_at": "2022-09-05T04:32:22Z",
//     "updated_at": "2025-04-29T14:32:09Z"
//   }

const jokes = [
    {
        id: 1,
        title: "Joke 1",
        content: "Why don't scientists trust atoms? Because they make up everything!"
    },
    {
        id: 2,
        title: "Joke 2",
        content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
        id: 3,
        title: "Joke 3",
        content: "Why don't skeletons fight each other? They don't have the guts."
    },
    {
        id: 4,
        title: "Joke 4",
        content: "What do you call fake spaghetti? An impasta!"
    },
    {
        id: 5,
        title: "Joke 5",
        content: "Why did the bicycle fall over? Because it was two-tired!"
    },
    {
        id: 6,
        title: "Joke 6",
        content: "What do you call cheese that isn't yours? Nacho cheese!"
    }
];

const app = express()
// const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get("/login",(req,res)=>{
    res.send("you are logged in")
})

app.get("/api/jokes",(req,res) =>{
    res.send(jokes)
})

app.listen(process.env.PORT,()=>{
    console.log(`running on port: ${process.env.PORT}`);
})
