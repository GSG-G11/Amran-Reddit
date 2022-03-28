const joi = require('joi');

const signupSchema = joi.object({
    username: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(7).required()
})


module.exports = signupSchema;