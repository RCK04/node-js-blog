const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/*
 * GET /
 * HOME
 */

router.get('', (req, res) => {
    const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
    };

    res.render('index', { locals });
});


function insertPostData(){
    Post.insertMany([
        {
            title: "Building a Blog",
            body: "This is the body text"
        },
    ])
}
insertPostData();






router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;