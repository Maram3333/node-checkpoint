const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "maramarfaoui316@gmail.com",
    pass: "efyr njxl crdj pzqm"
  }
});

const mailOptions = {
  from:"maramarfaoui316@gmail.com",
  to: 'maramarfaoui316@gmail.com',
  subject: "test my project ",
  text: 'hello hello ;maram !'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
