const { Server } = require('gwik');
const serverConfig = require('./config/server.config');

const server = new Server({
  port: serverConfig.port,
  logging: serverConfig.logging,
});

server.addStaticRoute(serverConfig.static.path, serverConfig.static.dir);

server.listen();
