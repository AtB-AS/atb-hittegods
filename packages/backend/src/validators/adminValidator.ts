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
