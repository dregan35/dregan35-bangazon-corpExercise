"use strict";
const { argv: [, , ...args] } = process;

let count = parseInt(args[0]);
let sides = parseInt(args[1]);

module.exports = { count, sides };
