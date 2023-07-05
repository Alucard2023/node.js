const {response}=require('express')
const http = require ('http')
http.createServer((request,response)=>{

    response.end('Hello Node!!!!')
}

).listen(3000)

const fs = require("fs");

// Read the contents of the file
const data = fs.readFileSync("welcome.txt", "utf8");

// Print the contents of the file to the console
console.log(data);