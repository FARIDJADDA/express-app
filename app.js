const path = require("path");
const express = require("express");
const { use } = require("express/lib/application");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");



const middleware1 = (req, res, next) => {
  console.log("middleware1");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("middleware2");
  next();
};


app.use("/foo", middleware1, middleware2);


app.get("/foo", (req, res) => {
  res.render("index");
});

app.listen(3000);
