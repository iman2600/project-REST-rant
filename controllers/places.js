const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [
    {
      name: "Generic Pizza Place",
      city: "Millcreek",
      state: "UT",
      cuisines: "Pizza, Wings",
      pic: "/images/fernando-andrade-_P76trHTWDE-unsplash.jpg",
    },
    {
      name: "Generic Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "images/nathan-dumlao-z3em1GBRhvY-unsplash.jpg",
    },
  ];

  res.render("places/index", { places });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST /places");
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

module.exports = router;
