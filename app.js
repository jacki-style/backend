const express=require('express');
const nodemailer = require("nodemailer");
const app=express();

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
    service: "IMAP",
    host: "cpsrv07.misshosting.com",
    auth: {
        user: "info@jackistyle.se",
        pass: "vPA!^aCq=~Qp"
    }
});
/*------------------SMTP Over-----------------------------*/


app.get('/', (req, res) => res.send('Hello World!'))


app.post('/register',function(req,res){
    var mailOptions={
        to : req.query.to,
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

app.listen(process.env.PORT || 3000,function(){
console.log("Express Started on Port 3000");
});
