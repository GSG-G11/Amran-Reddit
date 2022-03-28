const {clientError, serverError} = require('./handleError');
const addPost = require('./addPostController');
const getPosts = require('./getPostsController');
const addUser = require('./addUserController')


module.exports = {
    clientError,
    serverError,
    addPost,
    getPosts,
    addUser
}