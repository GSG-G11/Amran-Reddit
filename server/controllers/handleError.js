const { join } = require('path');

const clientError = (req, res)=>{
    res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'html', '404.html'))
};


const serverError = (err, req, res, next)=>{
    console.log(err);
    if(err.status){
        res.status(err.status).json({message: err.message, status: err.status})
    }else{
        res.status(500).json({ status: 500, message: 'Server Error'});
    }
    
};


module.exports = {clientError, serverError}