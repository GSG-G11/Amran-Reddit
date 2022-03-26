const router = require('express').Router();
const getPostsController = require('../controllers/getPostsController');



router.get('/getPosts', getPostsController);

module.exports = router;