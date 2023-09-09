const http = require('http');

function dataControl(req, resp){
    resp.write("<h1>Hello, this is Ankit</h1>");
    resp.end();
}
http.createServer(dataControl).listen(400);

