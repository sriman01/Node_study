const dbConnect = require('./mongodb');

const updateD = async () => {
    const data =await dbConnect();
    const result =await data.updateOne(
        {name:'sakshi'},
          { $set:{name:'babu-sona'}}
    )
    console.log(result);
}

updateD();