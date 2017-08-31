#!/usr/bin/env node
"use strict";

process.title = "Dice Roll";

const { count, sides } = require("./parse-args");
const { roll } = require("./dice");

const dice = roll(count, sides);
const total = roll(dice);

console.log(total);
