const express = require('express');
const router = express.Router();

// models
const Feed = require('../models/feed')

// get route to retrieve all posts on feed
router.get('/', (req, res) => {
    Feed.find({})
    .then(allFeed => {
        console.log('all feeds found: ', allFeed)
        res.json(allFeed.data)
    })
    .catch(err => console.log(err))
})


module.exports = router;