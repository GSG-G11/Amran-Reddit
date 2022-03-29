const { join } = require('path');
const router = require('express').Router();
const {getPosts, addPost, addUser, login} = require('../controllers');







router.post('/log-in', login)
router.get('/log-in', (req, res)=>{
    res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'details.html'));
})


router.post('/sign-up', addUser)
router.get('/sign-up', (req, res) =>{
    res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'details.html'));
})


router.get('/getPosts', getPosts);
router.post('/post', addPost);



module.exports = router;