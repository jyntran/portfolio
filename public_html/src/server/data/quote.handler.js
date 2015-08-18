#!/usr/bin/node

var http = require ('http');
var fs = require('fs');

var file = '/var/www/dev.jyntran.ca/public_html/src/server/data/api_quote.json';
var options = {
  hostname: 'api.theysaidso.com',
  path: '/qod.json?category=inspire',
  method: 'GET'
};

function write(data) {
    fs.writeFile(file, data, function (err) {
      if (err) return console.log(err);
      console.log(data);
    });
}

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    write(chunk);
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.end();
