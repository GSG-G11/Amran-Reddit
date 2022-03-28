const {clientError, serverError} = require('./handleError');
const addPost = require('./addPostController');
const getPosts = require('./getPostsController')


module.exports = {
    clientError,
    serverError,
    addPost,
    getPosts
}