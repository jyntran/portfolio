// BASE SETUP
// ==============================================

'use strict';

var express = require('express');
var connect = require('connect');
var bodyParser = require('body-parser');
var app     = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port    =   process.env.PORT || 8080;
var path = require('path');
 
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var generator = require('xoauth2').createXOAuth2Generator({
    user: 'j.yn.tran@gmail.com',
    //...
});

generator.on('token', function(token){
    console.log('New token for %s: %s', token.user, token.accessToken);
});


var transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
      xoauth2: generator 
    }
}));

var appDir = path.join(process.cwd(), './build/');

app.use(express.static('./build/'));
app.use(express.static('./src/client/'));
app.use(express.static('./'));

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

// home page route 
router.get('/', function(req, res) {
    res.sendFile(appDir + 'index.html');  
});

// contact
router.post('/contact', function(req, res) {
    var data = req.body.form;
    var mailOptions = {
      // from: "j.yn.tran@gmail.com",
      from: data.name + ' <' + data.email + '>',
      sender: data.email,
      to: "j.yn.tran@gmail.com",
      cc: data.email,
      subject: data.subject,
      generateTextFromHTML: true,
      html: data.message
    };

    transporter.sendMail(mailOptions, function(error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
      transporter.close();
    })
});

// apply the routes to our application
app.use('/', router);

// START THE SERVER
// ==============================================
app.listen(port, function(){
    console.log('--- SERVER ---' + port);
    console.log('Magic happens on port ' + port);
    console.log('---')
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nappDir = ' + appDir  +
        '\nprocess.cwd = ' + process.cwd());    
});
