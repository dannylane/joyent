

var log4js = require('./lib/log4js');
var http = require('http');
var io = require('./lib/socket.io');
log4js.addAppender(log4js.consoleAppender());
log4js.addAppender(log4js.fileAppender('grrr.txt'), 'grrr');

var log = log4js.getLogger('grrr');
log.setLevel('INFO');

var httpserver = http.createServer(function(req, res){
	res.writeHeader(200, {'content-type': 'text/plain'});
	res.writeBody('hello foo');
	res.finish();
	
});

var socket = io.listen(server);

socket.on();


