const {join} = require('path');
const { compare } = require('bcrypt');
const {sign} = require('jsonwebtoken');
const { checkEmailQuery } = require('../database/queires');
const { signinSchema } = require('../validation');

const privateKey = process.env.SECRET_KEY;

const login = (req, res)=>{
    signinSchema.validateAsync(req.body)
    .then(value =>{
        let id = ''
        const {email, password} = value;
        checkEmailQuery(email)
            .then(data => {
                if(data.rowCount === 0){
                    res.status(400).json({msg: 'The email does not exist! signup insted'})
                }else{
                    const {password:hashedPassword, id, email} = data.rows[0];
                    id = data.rows[0].id
                    return compare(password, hashedPassword)
                    
                }
            }).then(isMatched =>{
            if(isMatched){
                sign({id, email}, privateKey, (err, token)=>{
                    if(err){
                        res.status(500).json({msg: 'Internal server error'})
                    }else{
                        res.cookie('access_token', token, { httpOnly: true, secure: true })
                        .status(200).json({msg: 'login successfully!'})
                        
                        
                    }
                })
            }else{
                res.status(400).json({ msg: 'please write a correct password' })
            }
        }).catch((err) => res.status(500).json({msg:'server error'}));

    })
    .catch(({message}) => res.status(400).json({msg: message}));

          
}


module.exports = login;