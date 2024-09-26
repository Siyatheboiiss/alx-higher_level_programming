#!/usr/bin/node
const numberArg = process.argv.slice(2);
const validateNum = (num) => isNaN(num);
if (validateNum(numberArg)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parseInt(numberArg, 10)}`);
}
