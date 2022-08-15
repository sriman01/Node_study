const dbConnect = require('./mongodb');

const deleteData = async () => {
    const data =await dbConnect();
    const result = await data.deleteOne({name:'sonu'});
    console.warn(result);

    if(result.acknowledged){
        console.log("deleted successfully")
    }
}

deleteData();
