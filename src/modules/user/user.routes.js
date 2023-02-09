const { Router } = require('gwik');
const uploadMiddleware = require('../../common/middlewares/upload.middleware');
const UserController = require('./user.controller');

module.exports = [
  new Router('/users').get(UserController.getUsers).build(),
  new Router('/users/:id/photo')
    .middleware(
      uploadMiddleware({
        field: 'photo',
        allowedTypes: ['png', 'PNG', 'jpg'],
        dir: 'users',
        getFilename: ({ req, file }) => file.originalname,
      })
    )
    .patch(UserController.updateUserPhoto)
    .build(),
];
