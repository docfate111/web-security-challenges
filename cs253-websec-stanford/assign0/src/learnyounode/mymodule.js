const testFolder = process.argv[2];
const fs = require('fs');
var path = require('path');
var ext = '.' + process.argv[3];
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if(ext==path.extname(file)){
        console.log(file);
    }
  });
});