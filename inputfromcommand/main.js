const fs = require('fs')

console.log(process.argv)

const input = process.argv;

if(input[2] == 'add'){
    fs.writeFileSync(input[3], input[4]);   // 2 will file name and 3 is text
}
else if(input[2] == 'remove')
{
    fs.unlinkSync(input[3]);
}
else{
    console.log("invalid input");
}
