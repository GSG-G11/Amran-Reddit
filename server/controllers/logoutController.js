const logout = (req, res) =>{
    res.clearCookie('access_token').json({msg: 'logout successfully'});
}

module.exports = logout;
