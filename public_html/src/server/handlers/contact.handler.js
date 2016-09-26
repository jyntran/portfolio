var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var generator = require('xoauth2').createXOAuth2Generator({
    user: 'j.yn.tran@gmail.com',
    clientId: '93155087723-cn6iuhqh3hef4trt5e8fndt32pv6glbr.apps.googleusercontent.com',
    clientSecret: 'o2MKas4Zk3Y7fLN7BWAupbPB',
    refreshToken: '1/iYwsEsHRrZCI0zIawlZJuKmDcyftzpUWziwni89Q-8JIgOrJDtdun6zK6XiATCKT'
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

module.exports.sendEmail = function(req, res) {
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
        res.send('error')
      } else {
        console.log(response);
        res.send('success')
      }
      transporter.close();
    })
}