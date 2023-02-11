const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

//keep at bottom
app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(process.env.PORT);
