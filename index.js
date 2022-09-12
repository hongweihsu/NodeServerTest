const express = require('express');
require('./services/passport');
// const authRoutes = require('./routes/authRoutes')
const app = express();

// authRoutes(app)

require('./routes/authRoutes')(app)
// app.get('/', (req, res) =>
//     {res.send({bye: 'buddy'});});



// if Heroku define port then use it, otherwise 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);