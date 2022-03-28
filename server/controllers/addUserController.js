const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {addUserQuery, checkEmailQuery} = require('../database/queires');
const {signupSchema} = require('../validation');

const privateKey = process.env.SECRET_KEY;

const addUser= (req, res)=>{

      // Async using Promises

  // signupSchema.validateAsync(req.body)
  // .then(value => res.json(value))
  // .catch(({message}) => res.status(400).json({msg: message}));

    const {error, value} = signupSchema.validate(req.body)
    if(error){
        res.status(400).json({msg: error.message})
    }
    else{
        const {username, email, password} = value;
        checkEmailQuery(email)
          .then(data => {
              if(data.rowCount === 0) {
                 return bcrypt.hash(password, 10);
              }else {
                  throw {
                      message: 'The email exist! login instead!',
                      couse: 'user found'
                  };
              }
           })
          .then((hashedPassword) => {
              return addUserQuery({ username, email, hashedPassword})
            })
          .then(data => {
              const {id, username, email} = data.rows[0];
              sign({id, username, email}, privateKey, (err, token) => {
                  if(err) {
                      res.status(500).json({message: 'Error!'});
                  }else {
                      res.cookie('access_token', token, { httpOnly: true, secure: true })
                      .status(200).json({message: 'Registered successfully!'})
                      return token;
                  }
              })
        })
          .catch(error => {
              if(error.couse === 'user found'){
                  res.status(401).json({err: error.message})
              }else {
                  res.status(500).json({message: 'Internal server error'})
              }
          });
    }

}

module.exports = addUser