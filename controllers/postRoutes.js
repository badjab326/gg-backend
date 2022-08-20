const express = require('express')
const Post = require('../models/post')
const router = express.Router()



// GET route to retrieve one specific post
router.get('/:postId', (req, res) => {
    Post.find({_id: req.params.postId})
    .then(post => {
        console.log('post clicked on: ', post)
        res.json(post)
    })
    .catch(err => console.log(err))
})

// POST route to create a post
router.post('/', (req, res) => {
    Post.create({
        profile: req.profile._id,
        caption: req.body.caption,
        content: req.body.content,
        comments: [],
    })
    .then(createdPost => {
        console.log('post created: ', createdPost)
        res.json(createdPost)
    })
    .catch(err => console.log(err))
})

module.exports = router;