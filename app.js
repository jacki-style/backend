const express=require('express');
const nodemailer = require("nodemailer");
const app=express();

app.listen(process.env.PORT || 3000,function(){
console.log("Express Started on Port 3000");
});
