const Joi = require("joi");

const addPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = addPostSchema;
