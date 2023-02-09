const { Router } = require('gwik');
const UserController = require('./user.controller');

module.exports = [new Router('/users').get(UserController.getUsers).build()];
