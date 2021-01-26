"use strict";
const axios = require("axios");
const chalk = require("chalk");

module.exports = aCommon;

console.log(chalk.red('Hello world!'));

async function aCommon() {
  await axios.get("https://api.github.com/users/heimanba");
}
