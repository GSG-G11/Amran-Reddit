const router = require('express').Router();
const {getPosts} = require('../controllers');
const {addPost} = require('../controllers');
const {addUser} = require('../controllers')



router.get('/getPosts', getPosts);
router.post('/post', addPost);
router.post('/sign-up', addUser)

module.exports = router;