const addPostQuery= require('./addPostQuery');
const addUserQuery = require('./addUserQuery');
const getPostsQuery = require('./getPostsQuery');
const checkEmailQuery = require('./checkEmailQuery');
const deletePostQuery = require('./deletePostQuery')
const getUserPostsQuery = require('./getUsersPostsQuery')

module.exports = { 
    addPostQuery, addUserQuery, getPostsQuery, checkEmailQuery, deletePostQuery, getUserPostsQuery
};

