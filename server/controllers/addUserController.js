const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {addUserQuery, checkEmailQuery} = require('../database/queires');
const {signupSchema} = require('../validation');
const { status } = require('express/lib/response');

const privateKey = process.env.SECRET_KEY;

const addUser= (req, res)=>{

      // validation Async using Promises

  signupSchema.validateAsync(req.body)
  .then(value => {
        const {username, email, password} = value;
        checkEmailQuery(email)
        .then(data => {
            if(data.rowCount === 0){
                return bcrypt.hash(password, 10)
            }
            else {
                res.status(400).json({msg: 'The email exist! login instead!'})
            }
        }).then((password) =>{
            return addUserQuery(username, email, password);

        })
        .then(data => {
            const {id, username, email} = data.rows[0];
            sign({id, username, email}, privateKey, (err, token)=>{
                if(err){
                    res.status(500).json({msg : 'Error!'})
                }
                else{
                    res.cookie('access_token', token, { httpOnly: true, secure: true })
                    .status(200).json({message: 'Registered successfully!'})
                }
            })
        })
      
  })
  .catch(({message}) => res.status(400).json({msg: message}));
}


module.exports = addUser;