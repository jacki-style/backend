const express = require('express');
const request = require("request");
const app = express();
const port = process.env.PORT || 3000


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
    res.json({ result: 'ok' })
  });
})

app.listen(port, () => console.log(`Server started on port ${port}`))
