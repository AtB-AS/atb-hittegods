import Joi = require("@hapi/joi");

//See https://hapi.dev/module/joi/ for documentation of how this works
export const registerGetValidator = Joi.object({
  refnum: Joi.string().required().guid(),
});

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
  terms: Joi.bool(),
});

export const registerPutValidator = Joi.object({
  refnum: Joi.string().required().guid(),
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  //TODO better phone number
  phoneNumber: Joi.string().required(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  line: Joi.string().required().allow(""),
  description: Joi.string().required(),
  brand: Joi.string().required(),
  color: Joi.string().required(),
  date: Joi.date().required(),
});
