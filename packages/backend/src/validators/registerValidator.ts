import Joi = require("@hapi/joi");

//See https://hapi.dev/module/joi/ for documentation of how this works
export const registerGetValidator = Joi.object({
  refnum: Joi.string().required().guid(),
});

export const registerPostValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  //TODO better phone number
  phoneNumber: Joi.string().required(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  line: Joi.number().required().integer(),
  description: Joi.string().required(),
  brand: Joi.string().required(),
  color: Joi.string().required(),
  date: Joi.date().required(),
  to: Joi.string().required(),
  from: Joi.string().required(),
});

export const registerPutValidator = Joi.object({
  refnum: Joi.string().required().guid(),
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  //TODO better phone number
  phoneNumber: Joi.string().required(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  line: Joi.number().integer().required(),
  description: Joi.string().required(),
  brand: Joi.string().required(),
  color: Joi.string().required(),
  date: Joi.date().required(),
  to: Joi.string().required(),
  from: Joi.string().required(),
});
