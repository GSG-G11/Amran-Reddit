//validation
//check email
//comparePassword
// set cookies
//handel errors

const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { checkEmailQuery } = require('../database/queires');
const { signinSchema } = require('../validation');
const customError = require('../utils/error/custamizeError')



const privateKey = process.env.SECRET_KEY;

const login = (req, res, next) => {
    let id = '';
    const { password, email } = req.body;
    signinSchema.validateAsync(req.body)
        .then(() => checkEmailQuery(email))
        .then(data => {
            if (data.rowCount === 0) {
                throw customError('The email does not exist! signup insted', 401)      //throw err
            } else {
                id = data.rows[0].id
                const { password: hashedPassword } = data.rows[0];
                return compare(password, hashedPassword)
            }
        })
        .then(isMatched => {
            if (isMatched) {
                sign({ id, email }, privateKey, (err, token) => {
                    if (err) {
                        throw customError('server error!', 500);
                    } else {
                        res.cookie('access_token', token, { httpOnly: true, secure: true })
                            .status(201).json({ message: 'login successfully!' })
                    }
                })
            } else {
                throw customError('please write a correct password', 400);
            }
        })
        .catch((err) => {
            if (err.name === 'ValidationError') {
                const errorList = [];
                err.details.forEach((error) => {
                    errorList.push(error.message);
                })
                next(customError(errorList, 400))
            } else {
                next(err)
            }
        });
}


module.exports = login;