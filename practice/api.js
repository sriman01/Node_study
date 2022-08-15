const express = require('express');
const mongodb = require('mongodb');

const dbConnect = require('./mongoconnect');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();

    res.send(data);
})

app.listen(5000);