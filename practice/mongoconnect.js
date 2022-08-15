const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

const database ='youtubee';
const client = new MongoClient(url);

async function dbConnect(){
    let result= await client.connect();
    console.log("successfully connected");

    let db = result.db(database);
    return db.collection('videos');
}

module.exports = dbConnect;