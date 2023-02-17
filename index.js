const express = require("express");
const methodOverride = require("method-override");
const dotenv = require("dotenv").config();
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//controllers and routes
app.use("/places", require("./controllers/places"));

//Home route
app.get("/", (req, res) => {
  res.render("home");
});

//404 route (keep at bottom)
app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(process.env.PORT);
