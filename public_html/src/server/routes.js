var express = require('express');
var router = express.Router();

var apiHandler = require('./handlers/api.handler.js');
var contactHandler = require('./handlers/contact.handler.js');

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
});

router.get('/get/master', apiHandler.getMaster);

router.get('/get/quote', apiHandler.getQuote);
router.get('/get/weather', apiHandler.getWeather);
router.get('/get/current', apiHandler.getCurrent);

router.post('/contact', contactHandler.sendEmail);

router.use('/*', function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

module.exports = router;