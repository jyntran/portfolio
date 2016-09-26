#!/usr/bin/node

var http = require ('http');
var fs = require('fs');

var file = '/var/www/jyntran.ca/public_html/src/server/data/api_lastfm.json';
var options = {
  hostname: 'ws.audioscrobbler.com',
  path: '/2.0/?method=user.getRecentTracks&api_key=eb957c30473ebcbf479c419c8c8ff815&user=jyntran&format=json&limit=1',
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
