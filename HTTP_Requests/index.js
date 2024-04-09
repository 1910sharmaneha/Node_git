


import express from "express";
const app = express();
const port=3000;

app.get("/",(req,res)=>{
 res.send("<h1>Hello</h1>");

})

app.get("/about",(req,res)=>{
  res.send("<p>My name is Neha.</p><h3>My contact number:6364446412</h3>");
})


app.listen(port,()=>{
  console.log("Server started on port number 3000");
})