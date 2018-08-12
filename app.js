const express=require('express');
const nodemailer = require("nodemailer");
const app=express();

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
const transporter = nodemailer.createTransport({
  host: 'cpsrv07.misshosting.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@jackistyle.se',
    pass: process.env.email_password
  }
})
/*------------------SMTP Over-----------------------------*/


app.get('/', (req, res) => res.send('Hello World!'))


app.post('/register',function(req,res){
  const email = req.query.email

  transporter.sendMail({
    from: 'info@jackistyle.se',
    to: 'info@jackistyle.se',
    subject: 'New sign up!',
    text: email,
    html: email
  }).then(info => res.send(info)).catch(e => res.send(e))
})

app.listen(process.env.PORT || 3000,function(){
console.log("Express Started on Port 3000");
});
