var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'alucard_concept12@hotmail.com',
    pass: 'clubafricaine'
  }
});
var mailOptions = {
    from: 'alucard_concept12@hotmail.com',
    to: 'dekifaw707@devswp.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });