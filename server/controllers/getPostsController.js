const { getPostsQuery } = require('../database/queires');

const getPosts = (req, res)=>{
    getPostsQuery()
      .then(data => res.json(data.rows))
      .catch(err => res.status(500).json({messege: 'Internal server error!'}))
      
};


module.exports = getPosts