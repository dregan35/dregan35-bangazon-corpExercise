#!/usr/bin/env node

"use strict";

const readable = require("fs");

try {
  var data = readable.readFileSync("input-file.txt", "utf8");
  console.log(data);
} catch (err) {
  console.log("err", e.stack);
}

