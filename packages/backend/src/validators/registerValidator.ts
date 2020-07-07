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
  line: Joi.string().required().min(1).max(6),
  description: Joi.string().required(),
  brand: Joi.string().required(),
  color: Joi.string().required(),
  date: Joi.date().required(),
  to: Joi.string(),
  from: Joi.string(),
});

export const registerPutValidator = Joi.object({
  refnum: Joi.string().required().guid(),
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  //TODO better phone number
  phoneNumber: Joi.string().required(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  line: Joi.string().required().min(1).max(6),
  description: Joi.string().required(),
  brand: Joi.string().required(),
  color: Joi.string().required(),
  date: Joi.date().required(),
  to: Joi.string(),
  from: Joi.string(),
});
