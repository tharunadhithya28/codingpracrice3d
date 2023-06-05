const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hellooooooo!!!");
});

app.listen(3000);
