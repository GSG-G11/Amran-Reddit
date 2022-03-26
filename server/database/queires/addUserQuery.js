const connection = require('../config/connection');

const addUserQuery = (username, email, password)=>{
    const sql = {
        text: 'INSERT INTO users (username, email, password) values ($1, $2, $3) Returning *;',
        values: [username, email, password]
    };
    return connection.query(sql);
}

module.exports = addUserQuery;

