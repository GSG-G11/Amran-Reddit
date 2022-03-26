const connection = require("../config/connection")


const getPostsQuery = ()=>{
    return connection.query({
        text: 'SELECT * FROM posts',
        values: []
    });
};


module.exports = getPostsQuery;