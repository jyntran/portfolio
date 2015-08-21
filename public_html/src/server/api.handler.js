var quote = require('./data/api_quote.json');
var weather = require('./data/api_weather.json');
var works = require('./data/works.json');
var resume = require('./data/resume.json');
var about = require('./data/about.json');

module.exports.getQuote = function(req, res) {
    res.json(quote);
}

module.exports.getWeather = function(req, res) {
    res.json(weather);
}

module.exports.getWorks = function(req, res) {
    res.json({data:works});
}

module.exports.getResume = function(req, res) {
    res.json({data:resume});
}

module.exports.getAbout = function(req, res) {
    res.json({data:about});
}