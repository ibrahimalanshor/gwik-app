const { Router } = require('gwik');

module.exports = [new Router('/users').get(() => 'Get Users').build()];
