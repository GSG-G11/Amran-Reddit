const connection = require("../config/connection")


const getPostQuery = ()=>{
    return connection.query({
        text: 'SELECT * FROM posts',
        values: []
    });
};


module.exports = getPostQuery;