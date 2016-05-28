// Creates the server.
//
// public/             serves index.html
// public/js/*         servers static files
//
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');
var port = process.env.PORT || 8765;

var dir = path.dirname(fs.realpathSync(__filename)) + '/public';

http.createServer(function (req, res) { 
  var pathname = url.parse(req.url).pathname;
  var m;
  if (pathname == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(dir + '/index.html').pipe(res);
    return;
  } else if (m = pathname.match(/^\/js\//)) {
    var filename = dir + pathname;
    var stats = fs.existsSync(filename) && fs.statSync(filename);
    if (stats && stats.isFile()) {
      res.writeHead(200, {'Content-Type' : 'application/javascript'});
      fs.createReadStream(filename).pipe(res);
      return;
    }
  }
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write('404 Not Found\n');
  res.end();
}).listen(port);

console.log('server running on port '+port);
