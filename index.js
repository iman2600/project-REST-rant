const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

//keep at bottom
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
