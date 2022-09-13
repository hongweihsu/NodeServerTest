const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
})

// use userSchema to create a collection called "user"
mongoose.model('users', userSchema)