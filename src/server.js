const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Dockerizing a Node.js application here!");
});

app.listen(3000, function () {
  console.log("App listening on port 3000");
});
