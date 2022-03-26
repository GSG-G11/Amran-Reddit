const connection = require('../config/connection');

const addPostQuery = (title, content, user_id)=>{
    const sql = {
        text: 'INSERT INTO posts (title, content, user_id) values ($1, $2, $3) Returning *;',
        values: [title, content, user_id]
    }
    return connection.query(sql);
};


module.exports = addPostQuery;