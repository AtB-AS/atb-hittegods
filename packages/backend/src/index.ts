import express = require("express");

const port = process.env.PORT || 5000;
const app = express();

app.use("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(port);
