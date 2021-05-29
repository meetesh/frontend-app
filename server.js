const express = require("express");
const app = express();
app.use(express.static("./dist"));
app.listen("6060",function(){
  console.log("started on 6060...");
});

