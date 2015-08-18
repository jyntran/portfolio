var express = require('express');
var router = express.Router();

var apiHandler = require('./api.handler.js');
var contactHandler = require('./contact.handler.js');

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
});

router.get('/get/quote', apiHandler.getQuote);
router.get('/get/weather', apiHandler.getWeather);
router.get('/get/works', apiHandler.getWorks);
router.get('/get/resume', apiHandler.getResume);

router.post('/contact', contactHandler.sendEmail);

router.use('/*', function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

module.exports = router;