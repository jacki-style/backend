const express=require('express');
const nodemailer = require("nodemailer");
const app=express();

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/register', (req, res) => res.send('Sent'))

app.listen(process.env.PORT || 3000,function(){
console.log("Express Started on Port 3000");
});
