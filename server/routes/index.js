const router = require('express').Router();
const {getPosts, addPost, addUser, login} = require('../controllers');







router.get('/getPosts', getPosts);
router.post('/post', addPost);
router.post('/sign-up', addUser)
router.post('/log-in', login)


module.exports = router;