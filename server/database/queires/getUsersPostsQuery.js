const connection = require('../config/connection');

const getUserPostsQuery = (userID) => {
    sql = {
        text: 'select posts.id, posts.title, posts.content, users.username FROM posts JOIN users ON(posts.user_id = users.id) where users.id = $1 ;',
        values: [userID]
    }
    return connection.query(sql)
}

module.exports = getUserPostsQuery;