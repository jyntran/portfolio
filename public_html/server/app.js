// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;
var path = require('path');

var appDir = path.join(process.cwd(), '/app/');

// ROUTES
// ==============================================

// get an instance of router
var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next(); 
});

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
    res.sendFile(appDir + 'index.html');  
});

// we'll create our routes here

// apply the routes to our application
app.use('/', router);

// START THE SERVER
// ==============================================
app.listen(port, function(){
    console.log('Magic happens on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nappDir = ' + appDir  +
        '\nprocess.cwd = ' + process.cwd());    
});
