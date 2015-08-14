var http = require ('http');
var fs = require('fs');

module.exports = {
    test: function() {
        console.log('hello!')
    },
    quote: function() {
        request(quoteOptions, quoteFile);
    },
    weather: function() {
        request(weatherOptions, weatherFile);
    }
};

var quoteFile = 'api_quote.json';
var quoteOptions = {
  hostname: 'api.theysaidso.com',
  path: '/qod.json?category=inspire',
  method: 'GET'
};

var weatherFile = 'api_weather.json';
var weatherOptions = {
  hostname: 'api.openweathermap.org',
  path: '/data/2.5/weather?q=Waterloo,CA',
  method: 'GET'
};

function request(options, file) {
    var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        fs.writeFile(file, chunk, function (err) {
          if (err) return console.log(err);
          console.log(data);
        });    
        console.log('BODY: ' + chunk);
    });
    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });

    req.end();
    });
};