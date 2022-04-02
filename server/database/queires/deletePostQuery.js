const connection = require("../config/connection")

 const deletePostQuery = (id)=>{
     return connection.query({
         text: 'DELETE FROM posts where id = $1',
         values: [id]
     });
 };


 module.exports = deletePostQuery;