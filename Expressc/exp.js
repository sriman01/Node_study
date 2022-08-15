const express = require('express');

const app = express();

app.get('',(req, res) => {

    console.log("data sent by browser =>> ",req.query)   // ?name = sriman
    res.send("this is home page "+ req.query.name);
})

app.get('/About',(req, res) => {
    res.send("this is About page" );
})

app.get('/contact',(req, res) => {
    res.send("this is contact page");
})



app.listen(5000);