const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    body: String,
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile'
    }
},
{
    timestamps: true
}
)

module.exports = commentSchema