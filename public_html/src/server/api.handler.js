var quote = require('./data/api_quote.json');
var weather = require('./data/api_weather.json');

module.exports.getQuote = function(req, res) {
    res.json(quote);
}

module.exports.getWeather = function(req, res) {
    res.json(weather);
}