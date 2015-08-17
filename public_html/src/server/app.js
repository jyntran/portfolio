var express = require('express');
var connect = require('connect');
var path = require('path');
var bodyParser = require('body-parser');
var requireDir = require('require-dir');  
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var port    =   process.env.PORT || 8080;

var app     = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
 
app.use(express.static('./build/'));
app.use(express.static('./src/client/'));
app.use(express.static('./'));

var appDir = path.join(process.cwd(), './build/');

var generator = require('xoauth2').createXOAuth2Generator({
    user: 'j.yn.tran@gmail.com',
    clientId: '93155087723-cn6iuhqh3hef4trt5e8fndt32pv6glbr.apps.googleusercontent.com',
    clientSecret: 'o2MKas4Zk3Y7fLN7BWAupbPB',
    refreshToken: '1/Bf12MxJE8bpBtquWvgIEcQwJ5tXfE_hu2lYQUxgCcCM',
    accessToken: 'ya29.0gFDXP_zMbO3a96gnAYUqCfCHbOD0zHmUEt0zZc6jLgmDJjIaGUHbAwCoeBh2N2CcG28'
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

var router = express.Router();

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
});

router.get('/', function(req, res) {
    res.sendFile(appDir + 'index.html');  
});

router.post('/contact', function(req, res) {
    var data = req.body.form;
    var mailOptions = {
      from: data.name + ' <' + data.email + '>',
      sender: data.email,
      to: "me@jyntran.ca",
      cc: data.email,
      subject: data.subject,
      generateTextFromHTML: true,
      html: data.message
    };

    transporter.sendMail(mailOptions, function(error, response) {
      if (error) {
        console.log(error);
        res.send('error!')
      } else {
        console.log(response);
        res.send('success!')
      }
      transporter.close();
    })
});

app.use('/', router);

app.listen(port, function(){
    console.log('--- SERVER ---');
    console.log('Magic happens on port ' + port);
    console.log('---')
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nappDir = ' + appDir  +
        '\nprocess.cwd = ' + process.cwd());    
});
