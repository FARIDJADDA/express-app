const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.render("");
});

app.post("/", (req, res) => {
  console.log(req.body.key1);
  console.log(typeof req.body);
  res.render("index");
});

app.listen(3000);
