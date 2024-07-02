const BaseJoi = require("joi");
const JoiDate = require("@joi/date");

const Joi = BaseJoi.extend(JoiDate);

const validateForm = Joi.object({
  username: Joi.string()
    .pattern(/^[a-zA-Z0-9 ]+$/)
    .min(5)
    .max(50)
    .required(),
  email: Joi.string().email().required(),
  birthdate: Joi.date().required(),
});

module.exports = validateForm;
