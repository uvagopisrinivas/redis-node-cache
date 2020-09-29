const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
app.listen(5000, () => {
    console.log(`App listening to the port ${PORT}`);
});



