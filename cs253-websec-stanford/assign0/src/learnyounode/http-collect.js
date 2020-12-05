// Write a program that performs an HTTP GET request to a URL provided to you  
// as the first command-line argument. Collect all data from the server (not  
// just the first "data" event) and then write two lines to the console  
// (stdout).  
const http = require('http');
const url = process.argv[2];
function callback (response) { 
    var result = '';
    response.setEncoding("utf8");
    response.on('error', function (error) { console.error(error) });
    response.on('data', function (data) {
         result += data;
        });
    response.on('end', function(){ 
        console.log(result.length);
        console.log(result);
    })
}
http.get(url, callback);
// The first line you write should just be an integer representing the number  
// of characters received from the server. The second line should contain the  
// complete String of characters sent by the server.  