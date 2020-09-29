const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

const app = express();
app.get('/repos/:username', getRepos)
async function getRepos(req, res, next) {
    try {
        console.log('Fetching Data...');
        const { username } = req.params; // URL -http://localhost:5000/repos/uvagopisrinivas
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        const repos = data.public_repos;
        // setex - set experation accepts redis key, experation time, data 
        client.setex(username, 3600, repos); // Here it stays for 1hr || 3600 sec
        res.send(setResponse(username, repos));

        // Set data to Redis 
        function setResponse(username, repos) {
            return `<h2>${username} has ${repos} github repos</h2>`
        }

    } catch (err) {
        console.log(err);
        res.status(500);
    }
}

app.listen(5000, () => {
    console.log(`App listening to the port ${PORT}`);
});



