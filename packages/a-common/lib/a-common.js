"use strict";
const axios = require("axios");
const chalk = require("chalk");

module.exports = aCommon;

console.log(chalk.red('Hello world!'));
console.log(222)

async function aCommon() {
  await axios.get("https://api.github.com/users/heimanba");
}
