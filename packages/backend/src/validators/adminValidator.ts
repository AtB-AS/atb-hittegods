import Joi from "@hapi/joi";

export const lostGetValidator = Joi.object({
  status: Joi.string().required(),
});

export const lostIdGetValidator = Joi.object({
  id: Joi.number().required(),
});

export const matchPostValidator = Joi.object({
  lostid: Joi.number().required(),
  foundid: Joi.number().required(),
});

export const matchDeleteValidator = Joi.object({
  id: Joi.number().required(),
});

export const foundGetValidator = Joi.object({
  status: Joi.string().required(),
});

export const foundIdGetValidator = Joi.object({
  id: Joi.number().required(),
});

export const foundPostValidator = Joi.object({
  name: Joi.string().allow(""),
  email: Joi.string().email().allow(""),
  //TODO better phone number
  phone: Joi.string().allow(""),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  line: Joi.string().required().allow(""),
  description: Joi.string().required(),
  brand: Joi.string().required(),
  color: Joi.string().required(),
  status: Joi.string().required(),
});

export const foundPutBodyValidator = Joi.object({
  name: Joi.string().allow(""),
  email: Joi.string().email().allow(""),
  //TODO better phone number
  phone: Joi.string().allow(""),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  line: Joi.string().required().allow(""),
  description: Joi.string().required(),
  brand: Joi.string().required(),
  color: Joi.string().required(),
  status: Joi.string().required(),
});

export const foundPutParamValidator = Joi.object({
  id: Joi.number().required(),
});

export const lostIdStatusPutBodyValidator = Joi.object({
  status: Joi.string().required(),
});

export const lostIdStatusPutParamValidator = Joi.object({
  id: Joi.number().required(),
});

export const possibleMatchGetValidator = Joi.object({
  lostid: Joi.number(),
  foundid: Joi.number(),
});

export const possibleMatchIdDeleteValidator = Joi.object({
  id: Joi.number().required(),
});

export const possibleMatchIdNewPutBodyValidator = Joi.object({
  new: Joi.boolean().required(),
});

export const possibleMatchIdNewPutParamValidator = Joi.object({
  id: Joi.number().required(),
});
