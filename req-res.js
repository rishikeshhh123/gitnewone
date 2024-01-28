const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    // Set the content type to text/html
    res.setHeader('Content-Type', 'text/html');

    // Handle custom responses based on the requested URL
    if (req.url === '/home') {
        res.write('<html><body><h1>Welcome home</h1></body></html>');
    } else if (req.url === '/about') {
        res.write('<html><body><h1>Welcome to About Us page</h1></body></html>');
    } else if (req.url === '/node') {
        res.write('<html><body><h1>Welcome to my Node Js project</h1></body></html>');
    } else {
        // Default response for other URLs
        res.write('<html><body><h1>Page not found</h1></body></html>');
    }

    res.end();
});

server.listen(3000)
