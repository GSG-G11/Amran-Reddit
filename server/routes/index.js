const { join } = require('path');
const router = require('express').Router();
const { getPosts,
    addPost,
    addUser,
    login,
    logout,
    deletePost,
    getUserPosts
} =
    require('../controllers');

const { checkAuth } = require('../authentication/checkAuth');




router.get('/posts', getPosts);

router.post('/log-in', login)
router.post('/sign-up', addUser)

router.get('/details', (req, res) => {
    res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'details.html'));
})


router.post('/post', checkAuth, addPost);
router.get('/logout', checkAuth, logout);
router.delete('/deletePost', checkAuth, deletePost)
router.get('/getUsersPosts', checkAuth, getUserPosts)




module.exports = router;