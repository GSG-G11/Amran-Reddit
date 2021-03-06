const joi = require('joi');

const signinSchema = joi.object({
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()
});


module.exports = signinSchema;