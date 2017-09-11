#!/usr/bin/env node

const { readFile } = require("fs");

readFile("08.json", "utf8", (err, json) => {
  process.stdout.write(json);
});
