const express=require('express');
const nodemailer = require("nodemailer");
const app=express();

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/register',function(req,res){
  console.log("SENT")
});

app.listen(process.env.PORT || 3000,function(){
console.log("Express Started on Port 3000");
});
