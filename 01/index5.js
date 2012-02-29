var server = require("./lib/httpSrv2");
var router = require("./lib/router");

server.startServer(router.route);