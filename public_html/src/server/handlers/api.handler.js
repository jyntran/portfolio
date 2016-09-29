var master = require('../data/master.json');

var lastfm = require('../data/api_lastfm.json');

module.exports.getMaster = function(req, res) {
    res.json(master);
}

module.exports.getLastFM = function(req, res) {
    res.json(lastfm);
}
