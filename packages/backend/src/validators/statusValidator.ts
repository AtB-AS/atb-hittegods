import Joi = require("@hapi/joi");

export const registerPutStatusValidator = Joi.object({
  refnum: Joi.string().required().guid(),
});
