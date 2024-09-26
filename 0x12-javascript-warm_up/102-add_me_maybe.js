#!/usr/bin/node
function addMeMaybe (int, funcName) {
  int++;
  funcName(int);
}

module.exports = { addMeMaybe };
