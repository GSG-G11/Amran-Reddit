const { join } = require('path');
const router = require('express').Router();
const {getPosts, addPost, addUser, login} = require('../controllers');

const {checkAuth} = require('../authentication/checkAuth');





router.post('/log-in', login)
router.post('/sign-up', addUser)

router.get('/details', (req, res)=>{
    res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'details.html'));
})



router.post('/post', checkAuth , addPost);

router.get('/getPosts', getPosts);



module.exports = router;