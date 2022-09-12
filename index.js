const express = require('express');
const app = express();

app.get('/', (req, res) =>
    {res.send({bye: 'buddy'});});

// if Heroku define port then use it, otherwise 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);