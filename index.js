const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'youtubee'
const client = new MongoClient(url);

async function getData(){
   
    let result = await client.connect();
    console.log("successful")
    let db = result.db(database);
    let collection = db.collection('videos');
    let response = await collection.find({name:'sriman'}).toArray();
    console.log(response);
        
    
}

getData();