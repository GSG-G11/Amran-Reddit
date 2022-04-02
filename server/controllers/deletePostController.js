const { deletePostQuery } = require("../database/queires")


const deletePost = (req, res, next) => {
    const { id } = req.body
    deletePostQuery(id)
        .then(data => res.json(data))
        .catch(err => next(err))
};

module.exports = deletePost;
