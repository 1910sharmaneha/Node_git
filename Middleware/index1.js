import express from "express";
import bodyParser from "body-parser";

// below imports are used for the purpose of getting the directory from local storage
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//urlencoded ->data i want to pass(in our case its html form)
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // directory in which our html file is store (for response)
});

app.post("/submit",(req,res)=>{
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
