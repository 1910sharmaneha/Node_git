import express from "express";
import { inherits } from "util";
const app = express();
const port = 3000;

app.listen(port, () => {    //port->location of server
  console.log(`Server running on port ${port}.`);  //<- callback function
});


// steps to run the code:
// 1.npm init -y
// 2.npm i express
// 3. change type to module in package.json 
// 4. node index.js 
// 5.netstat -ano | findstr "LISTENING"
// 6. to stop server ctrl+c