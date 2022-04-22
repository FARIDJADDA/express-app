const path = require("path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", {
    name: "jean",
    authentificated: true,
    friends: 15,
    products: [
      { title: "product1", content: "content1" },
      { title: "product2", content: "content2" },
      { title: "product3", content: "content3" },
    ],
  });
});

app.listen(3000);
