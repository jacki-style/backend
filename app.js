const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const transporter = nodemailer.createTransport({
  host: 'cpsrv07.misshosting.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@jackistyle.se',
    pass: process.env.email_password
  }
})

app.get('/', (req, res) => res.send('Hello World!'))


app.post('/register',function(req,res){
  const email = req.query.email

  transporter.sendMail({
    from: 'info@jackistyle.se',
    to: 'info@jackistyle.se',
    subject: 'New sign up!',
    text: email,
    html: email
  }).then(info => res.json({ result: 'ok' })).catch(e => res.status(500).json({ result: 'error' }))
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server started on port ${port}`))
