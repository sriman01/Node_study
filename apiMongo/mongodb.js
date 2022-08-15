const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'youtubee'
const client = new MongoClient(url);

async function dbConnect(){
   
    let result = await client.connect();
    console.log("successful")
    let db = result.db(database);
    return db.collection('videos');
    // let response = await collection.find({}).toArray();
    // console.log(response);       
}

module.exports = dbConnect;
