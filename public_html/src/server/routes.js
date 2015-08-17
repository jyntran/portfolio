var express = require('express');
var router = express.Router();

var contactHandler = require('./contact.handler.js');

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
});

router.post('/contact', contactHandler.sendEmail);

router.use('/*', function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

module.exports = router;