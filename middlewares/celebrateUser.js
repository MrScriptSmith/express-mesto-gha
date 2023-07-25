const { Joi, Segments } = require('celebrate');

// eslint-disable-next-line max-len
// const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=])[A-Za-z\d!@#$%^&*()\-_+=]{8,}$/;

const celebrateUserLoginSchema = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
};

const celebrateUserRegisterSchema = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().uri(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
};

const celebrateUserGetUserIdSchema = {
  [Segments.PARAMS]: Joi.object().keys({
    userId: Joi.string().alphanum().length(24).hex(),
  }),
};

const celebrateUserUpdateProfileSchema = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
};

const celebrateUserUpdateAvatarSchema = {
  [Segments.BODY]: Joi.object().keys({
    avatar: Joi.string(),
  }),
};

module.exports = {
  celebrateUserRegisterSchema,
  celebrateUserLoginSchema,
  celebrateUserGetUserIdSchema,
  celebrateUserUpdateProfileSchema,
  celebrateUserUpdateAvatarSchema,
};
