var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var generator = require('xoauth2').createXOAuth2Generator({
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


// Routes

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
});

router.post('/contact', function(req, res) {
  console.log('/contact')
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

router.use('/*', function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

module.exports = router;