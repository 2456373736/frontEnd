const mongoose = require('mongoose');

const userScehma = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
});

const User = mongoose.model('user', userScehma);

module.exports = User;