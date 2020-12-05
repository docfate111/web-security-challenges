var path = require('path');
  // You must write a module file (mymodule.js) to do most of the work. The  
  // module must export a single function that takes three arguments: the  
  // directory name, the filename extension string and your callback function,  
  // in that order. Don't alter the filename extension string in any way before  
  // passing it to your module.   
  // The callback function must be called using the idiomatic node(err, data)  
  // convention. This convention stipulates that unless there's an error, the  
  // first argument passed to the callback will be null, and the second will be  
  // your data. In this exercise, the data will be your filtered list of files,  
  // as an Array. If you receive an error, e.g. from your call to  
  // fs.readdir(), the callback must be called with the error as the first and  
  // only argument.  
  // You must not print directly to the console from your module file, only  
  // from your original program.  
  // In the case of an error bubbling up to your original program file, simply  
  // check for it and print an informative message to the console.
  var fs = require('fs');
  var path = require('path');
  
  var dir = process.argv[2]
  var filterStr = process.argv[3]
  
  module.exports = function (dir, filterStr, callback) {
  
    fs.readdir(dir, function (err, list) {
      if (err)
        return callback(err)
  
      list = list.filter(function (file) {
        return path.extname(file) === '.' + filterStr
      })
  
      callback(null, list)
    })
  }
  