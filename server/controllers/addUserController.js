//validation
//check email
//hashedPassword
//addUser query
// set cookies
//handel errors

const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { addUserQuery, checkEmailQuery } = require('../database/queires');
const { signupSchema } = require('../validation');
const customError = require('../utils/error/custamizeError')

const privateKey = process.env.SECRET_KEY;

const addUser = (req, res, next) => {

    const { username, email, password } = req.body;
    signupSchema.validateAsync(req.body, { abortEarly: false })
        .then(() => checkEmailQuery(email))
        .then(data => {
            if (data.rowCount === 0) {
                return bcrypt.hash(password, 10)
            }
            else {
                throw customError('The email exists login instead!', 401)   //throw err with using customError function
            }
        }).then((hashedpassword) => addUserQuery(username, email, hashedpassword))
        .then(data => {
            const { id, username, email } = data.rows[0];
            sign({ id, username, email }, privateKey, (err, token) => {
                if (err) {
                    throw customError('server error!', 500);
                }
                else {
                    res.cookie('access_token', token, { httpOnly: true, secure: true })
                        .status(201).json({ message: 'Registered successfully!' })
                }
            })
        })
        .catch(err => {
            if (err.name === 'ValidationError') {
                const errorList = [];
                err.details.forEach((error) => {
                    errorList.push(error.message);
                });
                next(customError(errorList, 400));
            } else {
                next(err)
            }
        });
}


module.exports = addUser;