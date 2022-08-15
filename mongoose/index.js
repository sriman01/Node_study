  const mongoose = require('mongoose');

 
  mongoose.connect("mongodb://127.0.0.1:27017/youtubee");

  const ProductSch = new mongoose.Schema({
        name:String,
        age:Number
    });
const saveInDb = async () => {

    const ProductsModel = mongoose.model('videos',ProductSch);

    let data= new ProductsModel({name:"satyam", age:90});
    let result = await data.save();
    console.log(result)

  }

  const updateInDb = async () => {

    const Product = mongoose.model('videos', ProductSch);
    let data = await Product.updateOne(
        {
            name:'satyam'
        },
        {
            $set:{age:20}
        }
    )
   console.log(data);
  }

const deleteInDb =async () => {
    const Product = mongoose.model('videos',ProductSch);

    let data = await Product.deleteOne({name : 'sriman'});

    console.log(data);
}
const findInDb =async () => {
    const Product = mongoose.model('videos',ProductSch);

    let data = await Product.find();

    console.log(data);
}

saveInDb();