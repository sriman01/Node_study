const express = require('express');
require('./config')

const videos = require('./videos');

const app = express();

app.use(express.json());

app.post('/create',async(req, res) => {

    let data = new videos(req.body);
    let result =await data.save()

    console.log(req.body)
    res.send("done");
})

app.get('/list',async (req, res) => {

    
    let data = await videos.find();
    res.send(data);
})
app.delete('/delete/:id',async (req, res) => {

    
    let data = await videos.deleteOne(req.params);
    res.send(data);
})
app.put('/update/:id',async (req, res) => {

    let data = await videos.updateOne(req.params,{$set:{age:45}});
    res.send(data);
})

app.put('/update/:id')

app.listen(8000);