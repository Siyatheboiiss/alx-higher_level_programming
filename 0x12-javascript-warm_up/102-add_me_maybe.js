#!/usr/bin/node
function addMeMaybe (int, funcName) {
  int++;
  funcName();
}

module.exports = { addMeMaybe };
