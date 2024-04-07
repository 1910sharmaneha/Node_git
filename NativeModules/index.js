const fs = require("fs") ; //fs stands for file system which allows us to access the local storage of a system
// we are using a methond called writeFile which creates a file called message with content ->Hello... -> followed by  error handling
fs.writeFile("message.txt" , "Hello .This is using nodeJs",(err) => {
    if (err) throw err;
    console.log('The file has been saved!');});


//method readFile uses the file name -> format in which the output should be printed and -> error handlings
fs.readFile('message.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 