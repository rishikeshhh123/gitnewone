const http=require('http');
const requestHandler=require('./cleanup');
const server=http.createServer(requestHandler);

server.listen(4000)