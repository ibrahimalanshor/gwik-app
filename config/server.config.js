const path = require('path');
const { validatePort, stringToBoolean } = require('./helpers/validate.helper');

require('dotenv').config({
  path: path.resolve(
    __dirname,
    '../',
    `.env.${(process.env.NODE_ENV || 'DEVELOPMENT').toLowerCase()}`
  ),
});

module.exports = {
  port: validatePort(process.env.SERVER_PORT) || 4000,
  logging: stringToBoolean(process.env.SERVER_LOGGING) ?? true,
  static: {
    path: process.env.SERVER_STATIC_PATH || '/public',
    dir: path.resolve(
      __dirname,
      '../',
      process.env.SERVER_STATIC_DIR || 'public'
    ),
  },
};
