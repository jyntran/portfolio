var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
	/* values here */
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
