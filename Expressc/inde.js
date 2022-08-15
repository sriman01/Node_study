const express = require('express');
const app = express();
const path = require('path');

const publicfile = path.join(__dirname,'public')

app.set('view engine', 'ejs');

 app.get('',(req, res) => {
    res.sendFile(`${publicfile}/index.html`)
 })

 app.get('/about',(req, res) => {
    res.sendFile(`${publicfile}/about.html`)
 }), 

 app.get('/profile',(req, res) => {
   const user = {
      'name' : 'sriman',
      'age': 19,
      'skill':['java','python','c++']
   }
   res.render('profile',{user})
 })


 app.get('/know',(req, res) => {
   res.render('know')
 })

 app.get('*', (req, res) => {                 // default page if not found endpoints
    res.sendFile(`${publicfile}/404.html`)
 })

app.listen(5000);