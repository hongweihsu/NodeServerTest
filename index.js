const express = require('express');
const app = express();

app.get('/', (req, res) =>
    {res.send({'hi': 'listen'});});

app.listen(5000);