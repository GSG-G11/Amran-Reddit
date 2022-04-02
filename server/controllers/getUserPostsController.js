const { getUserPostsQuery } = require("../database/queires");

const getUserPosts = (req, res, next) => {
    const { id } = req.myToken;
    getUserPostsQuery(id)
        .then(data => res.json(data.rows))
        .catch(err => next(err));
};

module.exports = getUserPosts;