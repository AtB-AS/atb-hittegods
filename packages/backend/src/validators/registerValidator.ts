import Joi = require("@hapi/joi");

export const registerPostValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  //TODO better phone number
  phoneNumber: Joi.string(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  line: Joi.string().required().allow(""),
  description: Joi.string().required().allow(""),
  brand: Joi.string().required().allow(""),
  color: Joi.string().required().allow(""),
  date: Joi.date().required(),
});
