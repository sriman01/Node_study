const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/youtubee');

const productschema = new mongoose.Schema({
    name:String,
    age:Number
})

const save = async () => {
    const productsModel = mongoose.model('videos',productschema);

    let data = new productsModel({name:'sri', age:90});

    let result = await data.save();

    console.log(result);
}

save();