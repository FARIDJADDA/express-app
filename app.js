const path = require("path");
const express = require("express");
const { use } = require("express/lib/application");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const getCurrentUser = (req, res, next) => {
  req.user = {
    name: "toto",
    authenticated: false,
  };
  next();
};

const isAuthenticated = (req, res, next) => {
  if (req.user.authenticated) {
    console.log("ok");
  } else {
    next("route");
  }
  next();
};

app.get("/foo", getCurrentUser, isAuthenticated, (req, res) => {
  res.render("index");
});

app.get("/foo", (req, res) => {
  res.sendStatus(403);
});

app.listen(3000);
