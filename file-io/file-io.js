#!/usr/bin/env node

"use strict";

const { readFileSync } = require("fs");

try {
  var data = readFileSync("input-file.txt", "utf8");
  console.log(data);
} catch (err) {
  console.log("err", e.stack);
}
