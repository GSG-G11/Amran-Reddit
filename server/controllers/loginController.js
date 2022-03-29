const { compare } = require('bcrypt');
const {sign} = require('jsonwebtoken');
const { checkEmailQuery } = require('../database/queires');
const { signinSchema } = require('../validation');

const privateKey = process.env.SECRET_KEY;

const login = (req, res)=>{
    const {error, value} = signinSchema.validate(req.body)
    if(error){
        res.status(400).json({msg: error.message})
    }
    else{
        const {email, password} = value;
        checkEmailQuery(email)
          .then(data => {
              if(data.rowCount === 0){
                  res.status(401).json({msg: 'The email does not exist! signup insted'})
              }else{
                  const {password:hashedPassword, id, email} = data.rows[0];
                   compare(password, hashedPassword)
                   .then(isMatched =>{
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
              }
          }).catch(err =>res.status(500).json({msg: 'server error'}))

    }

}

module.exports = login;