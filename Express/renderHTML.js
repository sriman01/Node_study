const express = require('express');
const app = express();
const path = require('path');

const publicfile = path.join(__dirname,'public')

// app.use(express.static(publicfile));   // this will help to access public folder files i.e. static files this will show with .html

 app.get('',(req, res) => {
    res.sendFile(`${publicfile}/index.html`)
 })

 app.get('/about',(req, res) => {
    res.sendFile(`${publicfile}/about.html`)
 }), 

 app.get('*', (req, res) => {                 // default page if not found endpoints
    res.sendFile(`${publicfile}/404.html`)
 })

app.listen(5000);