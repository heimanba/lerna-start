"use strict";
const axios = require("axios");
const _ = require("lodash");

module.exports = aCore;

const demo = ["a", "b", "c", "d"];
_.each(demo, (item) => console.log(item));
async function aCore() {
  await axios.get("https://api.github.com/users/heimanba");
}
