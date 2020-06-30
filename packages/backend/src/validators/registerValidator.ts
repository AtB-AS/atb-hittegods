import Joi = require("@hapi/joi");

//See https://hapi.dev/module/joi/ for documentation of how this works
export const registerGetValidator = Joi.object({
  refnum: Joi.string().required(),
});

export const registerPostValidator = Joi.object({
  category: Joi.string(),
  subCategory: Joi.string(),
  line: Joi.number().integer(),
  description: Joi.string(),
  brand: Joi.string(),
  color: Joi.string(),
  date: Joi.date(),
  to: Joi.string(),
  from: Joi.string(),
});

export const registerPutValidator = Joi.object({
  refnum: Joi.string().required(),
  name: Joi.string(),
  email: Joi.string().email(),
  //TODO better phone number
  phoneNumber: Joi.string(),
  category: Joi.string(),
  subCategory: Joi.string(),
  line: Joi.number().integer(),
  description: Joi.string(),
  brand: Joi.string(),
  color: Joi.string(),
  date: Joi.date(),
  to: Joi.string(),
  from: Joi.string(),
});
