const express = require('express');
const request = require("request");
const app = express();
const port = process.env.PORT || 3000
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'cpsrv07.misshosting.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@jacki.se',
    pass: process.env.email_password_jacki
  }
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('Hello World!'))


const mailchimpUsername = process.env.mailchimpUsername
const mailchimpAPIKey = process.env.mailchimpAPIKey
const listID = process.env.subscriptionListID
const mailchimpInstance = 'us7'

app.post('/register',function(req,res){

  var options = { method: 'POST',
    url: 'https://us7.api.mailchimp.com/3.0/lists/'+ listID +'/members/',
    headers:
     {
       'cache-control': 'no-cache',
       Authorization: 'Basic ' + new Buffer(mailchimpUsername + ':' + mailchimpAPIKey ).toString('base64'),
     },
    body: {
      'email_address': req.query.email,
      'status': 'subscribed',
      'merge_fields': {
      }
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) {
      console.error('error on mailchimp register, try 1', error);
      return request(options, function (error, response, body) {
        if (error) {
          console.error('error on mailchimp register, try 2', error);
          return res.status(500).json({ result: 'error' })
        }
        console.log('Added ' + req.query.email + ' to the subscriptionList')
        res.json({ result: 'ok' })
      })
    }
    console.log('Added ' + req.query.email + ' to the subscriptionList')
    transporter.sendMail({
      from: 'info@jacki.se',
      to: 'info@jacki.se',
      subject: 'New sign up!',
      text: req.query.email,
      html: req.query.email
    }).then((info) => {
      console.log(`Sent email to info@jacki.se`)
      res.json({ result: 'ok' })
    }).catch((e) => {
      console.error(e)
      res.status(500).json({ result: 'error' })
    })
  });
})

app.listen(port, () => console.log(`Server started on port ${port}`))
