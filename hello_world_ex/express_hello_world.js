"use strict";

const express = require("express");
const app = express();
require("dotenv").config();

const getTime = (req, res, next) => {
  let time = new Date();
  let node_time = time.toISOString();
  res.send(`Time: ${node_time}`);
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/time", getTime);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: "Err, Time to refactor",
    err: err
  });
});
let port = process.env.port;

app.listen(port || 8080);
{
  console.log(`listening on port ${port}`);
}
