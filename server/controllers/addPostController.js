const {addPostQuery} = require('../database/queires');

const addPost = (req, res) =>{
  const {id} = req.myToken
    const {title, content} = req.body;
    addPostQuery(title, content, id)
      .then(data => {
          res.status(201).json({
              messege: 'The post added successflly',
              post: data.rows[0]
            })
      })
      .catch(err => res.status(500).json({messege: 'Error!'}))
      
}


 module.exports = addPost;