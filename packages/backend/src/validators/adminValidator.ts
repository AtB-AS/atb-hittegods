import Joi from "@hapi/joi";

export const lostGetValidator = Joi.object({
  from: Joi.number().min(0).required(),
  to: Joi.number().greater(Joi.ref("from")).required(),
});

export const lostDetailsGetValidator = Joi.object({
  id: Joi.number().required(),
});

export const matchPostValidator = Joi.object({
  lostid: Joi.number().required(),
  foundid: Joi.number().required(),
});

export const matchDeleteValidator = Joi.object({
  lostid: Joi.number().required(),
  foundid: Joi.number().required(),
});

export const foundGetValidator = Joi.object({
  from: Joi.number().min(0).required(),
  to: Joi.number().greater(Joi.ref("from")).required(),
});

export const foundPostValidator = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  //TODO better phone number
  phone: Joi.string(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  line: Joi.string().required().allow(""),
  description: Joi.string().required(),
  brand: Joi.string().required(),
  color: Joi.string().required(),
});

export const foundDetailsGetValidator = Joi.object({
  id: Joi.number().required(),
});
