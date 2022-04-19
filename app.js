const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //res.status(404);
  res.set({ "content-type": "text/html", "x-my-header": "123" });
  res.append("x-my-header-2", "123456789");
  res.send(
    "<html><head><title>Hello</title></head><body><h1>index File</h1></body></html>"
  );
});

app.listen(3000);
