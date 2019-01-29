const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

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


app.post('/register',function(req,res){
  const email = req.query.email
  const customerEmail = `Välkommen!

Vad roligt att du är intresserad av vår tjänst, JACKI! Tjänsten är till för dig och alla andra där ute som inte alltid har den lilla extra tiden för att gå ut på stan och shoppa eller att bläddra igenom allt för många olika shoppingsidor online.

Du har skrivits upp på vår lista och när din tur är kommen så kommer du få ett mejl där du kan fylla i ditt personliga stiltest. Under tiden så får ni gärna lämna feedback eller önskemål till oss genom att svara på mejlet.

Stay tuned!

Grundare & VD,
Michelle
michelle@jacki.se
`
  const customerHtmlEmail = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
        <!-- <style type="text/css">&lt;![CDATA[
body{font-family:Helvetica,Arial;font-size:13px}
]]&gt;
</style> -->
        <style type="text/css">@media screen {
  @font-face {
                font-family: 'Kiona';
                src: url('/fonts/Kiona-Regular.ttf') format('truetype');
                font-weight: normal;
                font-style: normal;
  }

  body {
    font-family: "Helvetica Neue","Helvetica,Arial","sans-seriff";
  }
</style>
    </head>
    <body dir="auto" style="word-wrap: break-word; -webkit-nbsp-mode: space; line-break: after-white-space;">
        <div>
            <div>
                <div id="bloop_customfont" style="margin: 0px;">
                    <div style="text-align: left;">
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0); font-size: 14px;">
                                <font face="HelveticaNeue">Välkommen!</font>
                            </span>
                        </div>
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0); font-size: 14px;">
                                <font face="HelveticaNeue">
                                    <br />
                                </font>
                            </span>
                        </div>
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0); font-size: 14px;">
                                <font face="HelveticaNeue">Vad roligt att du är intresserad av vår tjänst, JACKI! Tjänsten är till för dig och alla andra där ute som inte alltid har den lilla extra tiden för att gå ut på stan och shoppa eller att bläddra igenom allt för många olika shoppingsidor online. </font>
                            </span>
                        </div>
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0); font-size: 14px;">
                                <font face="HelveticaNeue">
                                    <br />
                                </font>
                            </span>
                        </div>
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0); font-size: 14px;">
                                <font face="HelveticaNeue">Du har skrivits upp på vår lista och när din tur är kommen så kommer du få ett mejl där du kan fylla i ditt personliga stiltest. Under tiden så får ni gärna lämna feedback eller önskemål till oss genom att svara på mejlet.</font>
                            </span>
                        </div>
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0); font-size: 14px;">
                                <font face="HelveticaNeue">
                                    <br />
                                </font>
                            </span>
                        </div>
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0); font-size: 14px;">
                                <font face="HelveticaNeue">Stay tuned!</font>
                            </span>
                        </div>
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0); font-size: 14px;">
                                <font face="HelveticaNeue">
                                    <br />
                                </font>
                            </span>
                        </div>
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0); font-size: 14px;">
                                <font face="HelveticaNeue">Grundare &amp; VD,</font>
                            </span>
                        </div>
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0); font-size: 14px;">
                                <font face="HelveticaNeue">Michelle</font>
                            </span>
                        </div>
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0); font-size: 14px;">
                                <font face="HelveticaNeue">michelle@jacki.se</font>
                            </span>
                        </div>
                        <div>
                            <span style="background-color: rgba(255, 255, 255, 0);">
                                <br />
                            </span>
                        </div>
                    </div>
                    <div style="text-align: left;"></div>
                    <img alt="JACKI Logo" src="https://jacki.se/img/logo.png" style="box-sizing: inherit; width: 50px; border: 0px;" />
                </div>
                <div style="text-align: left; font-size: 14px;">
                    <font face="HelveticaNeue">
                        <br />
                    </font>
                </div>
                <div id="bloop_sign_1535387007230392832" class="bloop_sign"></div>
                <div id="bloop_sign_1535387007230392832" class="bloop_sign">
                    <br />
                </div>
                <div id="bloop_sign_1535387007230392832" class="bloop_sign">
                    <font face="HelveticaNeue-Italic" size="1">
                        <i>*Svara på mejlet om du inte längre vill få mejl från JACKI</i>
                    </font>
                </div>
                <div id="bloop_sign_1535387007230392832" class="bloop_sign">
                    <br />
                </div>
                <div id="bloop_sign_1535387007230392832" class="bloop_sign">
                    <br />
                </div>
            </div>
        </div>
    </body>
</html>`

  transporter.sendMail({
    from: 'info@jacki.se',
    to: 'info@jacki.se',
    subject: 'New sign up!',
    text: email,
    html: email
  }).then((info) => {
    console.log(`Sent email to info@jacki.se`)

    return transporter.sendMail({
      from: 'info@jacki.se',
      to: email,
      subject: 'Välkommen till JACKI!',
      text: customerEmail,
      html: customerHtmlEmail
    }).then((info) => {
      console.log(`Sent email to ${email}`)
      res.json({ result: 'ok' })
    })

  }).catch((e) => {
    console.error(e)
    res.status(500).json({ result: 'error' })
  })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server started on port ${port}`))
