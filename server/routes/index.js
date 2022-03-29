const { join } = require('path');
const router = require('express').Router();
const {getPosts, addPost, addUser, login} = require('../controllers');







router.post('/log-in', login)
router.post('/sign-up', addUser)

router.get('/details', (req, res)=>{
    res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'details.html'));
})




router.get('/getPosts', getPosts);
router.post('/post', addPost);



module.exports = router;