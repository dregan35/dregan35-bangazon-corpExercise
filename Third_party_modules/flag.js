#!/usr/bin/env node

"use strict";

const chalk = require("chalk");

var stars = chalk.white.bgBlue(
  "+ + + + + + +",
  chalk.blue.bgRed.bold.underline("                                  ")
);
var star_stripes = chalk.white.bgBlue(
  " + + + + + + ",
  chalk.blue.bgWhiteBright("                                  ")
);
var blood = chalk.blue.bgRed.bold.underline(
  "                                                "
);
var pure = chalk.blue.bgWhiteBright(
  "                                                "
);

console.log(stars);
console.log(star_stripes);
console.log(stars);
console.log(star_stripes);
console.log(stars);
console.log(star_stripes);
console.log(stars);
console.log(pure);
console.log(blood);
console.log(pure);
console.log(blood);
console.log(pure);
console.log(blood);
