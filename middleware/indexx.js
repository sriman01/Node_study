const express = require('express');
const app = express();
const reqFilter = require('./middle')

const route = express.Router();

route.use(reqFilter)

// // middleware----------------------
// const reqFilter = (req, res, next) => {
//     console.log('reqFilter')
//     next();
// }

// app.use(reqFilter)  // this will work in all routes.(application level middleware)

app.get('',(req, res) => {
    res.send("welcome home page")
})
app.get('/about',(req, res) => {
    res.send("welcome about page")
})
// app.get('/contact',reqFilter,(req, res) => {  // route level middileware
//     res.send("welcome contact page")
// })
route.get('/contact',(req, res) => {  // route level middileware
    res.send("welcome contact page")
})

app.use('/', route)
// to apply more than onr routes replce app by route

app.listen(5000);


  




// add middleware in all at a time
// add middle ware in sigle routes
//add middleware in group of routes