const dbConnect = require('./mongodb')

/*-----------------first method to handle promises-------*/
// dbConnect().then((res) => {
//     res.find({}).toArray().then((data) => {
//         console.log(data);
//     })
// })


/*-----------second method to handle promises--------*/
const main = async () => {
    let data =await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();