"use strict";

const randomNumber = sides => {
  if (!sides || sides < 6) sides = 6;
  return Math.floor(Math.random() * +sides + 1);
};

module.exports = { randomNumber };
