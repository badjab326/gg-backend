const mongoose = require('mongoose');
const commentSchema = require('./comment');


const postSchema = new mongoose.Schema({
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    },
    caption: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comments: [commentSchema],
    likes: {
        type: Number,
    }
})

module.exports = mongoose.model('Post', postSchema);