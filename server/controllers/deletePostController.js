const { deletePostQuery } = require("../database/queires")


const deletePost = (req, res, next) => {
    const { id } = req.body
    deletePostQuery(id)
        .then(data => res.status(200).json({message: 'the post was deleted successfully'}))
        .catch(err => next(err))
};

module.exports = deletePost;
