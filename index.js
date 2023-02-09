const { Server } = require('gwik');
const serverConfig = require('./config/server.config');
const routes = require('./src/routes');

const server = new Server({
  port: serverConfig.port,
  logging: serverConfig.logging,
});

server.addStaticRoute(serverConfig.static.path, serverConfig.static.dir);
server.addRoute(routes);

server.listen();
