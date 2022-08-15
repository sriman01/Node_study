const mysql = require('mysql');

const co = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

co.connect((err) => {
    if(err){
        console.warn("error")
    }
    else{
        console.warn("connected")
    }
})

module.exports = co;