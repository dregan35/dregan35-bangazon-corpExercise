#!/usr/bin/env node

"use strict";

const readable = require("fs");

readable.readFile("input-file.txt", "utf8", function(err, data) {
  if (err) throw err;
  console.log(data);
});
