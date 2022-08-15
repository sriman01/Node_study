const fs = require('fs');

const path = require('path');
const { fileURLToPath } = require('url');

const dirpath = path.join(__dirname, 'file');

// console.log(dirpath);

for(var i = 0; i < 6; i ++){    // creation of multiple file
    fs.writeFileSync(`${dirpath}/hello${i}.txt`,"hii this is creted using the code that create 5 file at a time");
}


fs.readdir(dirpath, (err, file) => {
    // console.log(file) // this will print file array

     file.forEach((item) => {
            console.log(item);
     })

})
