const connection = require("../config/connection")


const getPostsQuery = ()=>{
    return connection.query({
        text: 'select posts.id, posts.title, posts.content, users.username FROM posts JOIN users ON(posts.user_id = users.id) ;',
        values: []
    });
};


module.exports = getPostsQuery;