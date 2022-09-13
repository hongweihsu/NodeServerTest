// keys.js - use env variable. In heroku, the NODE_ENV is defined as 'production'
if (process.env.NODE_ENV === 'production'){
    // we are in production - return the prod set of keys
    module.exports = require('./prod');
} else {
    // we are in development - return the dev keys!!!
    module.exports = require('./dev');
}

