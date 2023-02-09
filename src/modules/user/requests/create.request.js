const { createBodyValidationMiddleware, body } = require('gwik');

module.exports = createBodyValidationMiddleware([
  body('name').exists(),
  body('password').exists(),
]);
