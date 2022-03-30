const {clientError, serverError} = require('./handleError');
const addPost = require('./addPostController');
const getPosts = require('./getPostsController');
const addUser = require('./addUserController');
const login = require('./loginController');
const logout = require('./logoutController')


module.exports = {
    clientError,
    serverError,
    addPost,
    getPosts,
    addUser,
    login,
    logout
}