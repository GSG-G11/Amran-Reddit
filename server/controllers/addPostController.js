const {addPostQuery} = require('../database/queires');
const addPostSchema = require('../validation/addPostSchema');
const customError = require('../utils/error/custamizeError')


const addPost = (req, res, next) =>{
  const {id} = req.myToken
    const {title, content} = req.body;

    addPostSchema.validateAsync(req.body)
    .then(() =>addPostQuery(title, content, id))
    .then(data => res.status(201).json({post: data.rows[0], message: 'The post added successflly'}))
    .catch((err) => {
      if (err.name === 'ValidationError') {
          const errorList = [];
          err.details.forEach((error) => {
              errorList.push(error.message);
          })
          next(customError(errorList, 400))
      } else {
          next(err)
      }
  });      
}
  

 module.exports = addPost;
