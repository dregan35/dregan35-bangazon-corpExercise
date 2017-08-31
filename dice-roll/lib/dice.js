"use strict";

const { randomNumber } = require("./math.js");

const roll = (count, sides) => {
  let i = 0;
  let diceTotal = 0;
  while (i < count) {
    diceTotal += randomNumber(1, sides);
    i++;
  }

  return diceTotal;
};

module.exports = { roll };
