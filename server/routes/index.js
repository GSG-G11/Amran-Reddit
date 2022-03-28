const router = require('express').Router();
const {getPosts} = require('../controllers');
const {addPost} = require('../controllers')



router.get('/getPosts', getPosts);
router.post('/post', addPost)

module.exports = router;