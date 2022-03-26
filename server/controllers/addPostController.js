const {addPostQuery} = require('../database/queires')

const addPost = (req, res, next) =>{
    const {title, content, user_id} = req.body;
    addPostQuery(title, content, user_id)
      .then(data => {
          res.status(201).json({
              messege: 'The post add successflly',
              post: data.rows[0]
            })
      })
      .catch(err => res.status(500).json({messege: 'Error!'}))
      
    //   .catch(err => next(err))
}


 module.exports = addPost;