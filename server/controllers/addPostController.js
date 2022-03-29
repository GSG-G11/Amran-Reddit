const {addPostQuery} = require('../database/queires');


const addPost = (req, res, next) =>{
    const {title, content} = req.body;
    addPostQuery(title, content, user_id)
      .then(data => {
          res.status(201).json({
              messege: 'The post added successflly',
              post: data.rows[0]
            })
      })
      .catch(err => res.status(500).json({messege: 'Error!'}))
      
}


 module.exports = addPost;