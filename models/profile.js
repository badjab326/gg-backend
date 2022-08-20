const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userName: String,
    ytUser: String,
    twitchUser: String,
    likes: Array,
    bio: String,
    steamUser: String,
    psnUser: String,
    xboxUser: String,
    switchUser: String,
    riotUser: String,
    epicUser: String,
    battlenetUser: String,
    userImage: String,
    posts: Array
})

module.exports = mongoose.model('Profile', profileSchema);