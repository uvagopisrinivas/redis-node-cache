const express = require('express');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 5000;
const app = express();
app.get('/repos/:username', getRepos)
async function getRepos (req, res, next) {
    try {
        console.log('Fetching Data...');
        const { username } = req.params;
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        res.send(data);

    } catch (err) {
        console.log(err);
        res.status(500);
    }
}

app.listen(5000, () => {
    console.log(`App listening to the port ${PORT}`);
});

