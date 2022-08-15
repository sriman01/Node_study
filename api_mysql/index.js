const express = require('express');
const co = require('./config');

const app = express();

app.use(express.json());

app.get('/',(req, res) => {
    co.query("select * from student",(err, result) => {
        if(err){
            res.send("error hai")
        }
        else{
            res.send(result);
        }
    })
});

app.post('/',(req, res) => {
    const data = req.body;
    co.query("INSERT INTO student SET ?",data, (err, result, field) => {
        if(err) throw  error;
        res.send(result);
    })
})


app.put('/:key', (req, res) => {
    // const data = ['gopali','satyam51','satyam'];
    const data = [req.body.lastName,req.body.userName,req.params.key]
    co.query("UPDATE student SET lastName = ? , userName = ? where firstName = ?", data, (err, result, field) => {
        res.send(result);

    })
})

app.delete('/:key', (req, res) => {
    const data = [req.params.key];
    co.query("DELETE FROM student WHERE firstName = ?", data, (err,result, field) => {
        res.send(result);
    })
})

app.listen(5000);