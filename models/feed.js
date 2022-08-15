const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    posts: Array
});

module.exports = mongoose.model('Feed', feedSchema);