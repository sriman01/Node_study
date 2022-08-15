const fs = require('fs');

const type = "hello my name is sriman kumar"
fs.writeFileSync('./hello.txt', type)

const type1 = fs.readFileSync('./hello.txt','utf-8');

console.log(type1);