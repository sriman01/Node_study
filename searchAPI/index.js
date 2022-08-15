const express = require('express');
require('./config')
const videos = require('./videos');
const app = express();
app.use(express.json());
 

app.get('/search/:key', async (req, res) => {
    console.log(req.params.key)
    let data = await videos.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}}  
            ]
        }
    );
    res.send(data);
})

app.listen(8000);