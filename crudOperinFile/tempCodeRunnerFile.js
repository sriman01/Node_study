fs.writeFileSync(filepath,'this is a text file')

fs.readFile(filepath,'utf-8', (err,item) => {
    console.log(item);
})

fs.appendFile(filepath,' and file is appended', (err) => {
    if(!err) console.log("file updated");
})

fs.rename(filepath,`${dirname}/orange.txt`,(err) => {
    if(!err) console.log('file renamed');
})