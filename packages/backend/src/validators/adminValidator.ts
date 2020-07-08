import Joi from "@hapi/joi";

export const lostGetValidator = Joi.object({
  from: Joi.number().min(0).required(),
  to: Joi.number().greater(Joi.ref("from")).required(),
});
