const joi = require('joi');

const signupSchema = joi.object({
    username: joi.string().min(3).max(30).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()
})


module.exports = signupSchema;