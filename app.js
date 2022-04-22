const path = require("path");
const express = require("express");
const { use } = require("express/lib/application");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const getCurrentUser = (req, res, next) => {
  req.user = {
    name: "toto",
    authenticated: true,
  };
  next();
};

const isAuthenticated = (req, res, next) => {
  if (req.user.authenticated) {
    console.log("ok");
  } else {
    console.log("not ok");
  }
  next();
};

app.use("/foo", getCurrentUser, isAuthenticated);

app.get("/foo", (req, res) => {
  res.render("index");
});

app.listen(3000);
