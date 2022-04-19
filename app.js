// const path = require("path");
// const test = path.parse(
//   path.join(__dirname, "new-folder", "second-new-folder", "index.js")
// );
// console.log(test);

const path = require("path");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.send({ key1: "value1" }); // send and parse data
  // res.json({ key2: "value2" }); // send data format json
  // res.sendStatus(500); // send errors status message
  res.sendFile(
    path.join(__dirname, "index.html"),
    {
      headers: {
        "content-type": "text/html",
      },
    },
    (err) => {
      if (err) {
        res.sendStatus(500);
      }
    }
  );
});

app.listen(3000);
