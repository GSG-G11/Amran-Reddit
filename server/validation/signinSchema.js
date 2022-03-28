const joi = require('joi');

const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(7).required()
});


module.exports = signinSchema;