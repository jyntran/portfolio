var express = require('express');
var router = express.Router();

var apiHandler = require('./handlers/api.handler.js');
var contactHandler = require('./handlers/contact.handler.js');

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
});

// API endpoints
router.get('/get/master', apiHandler.getMaster);
router.get('/get/lastfm', apiHandler.getLastFM);

// Contact endpoint
router.post('/contact', contactHandler.sendEmail);

// Project redirects
router.get('/absolution', function(req, res) {
    res.redirect('http://absolution.jyntran.ca');
});
router.get('/fine225', function(req, res) {
    res.redirect('http://absolution.jyntran.ca');
});

// Anything else, return an error
router.use('/*', function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

module.exports = router;
