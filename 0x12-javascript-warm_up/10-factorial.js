#!/usr/bin/node
const param = parseInt(process.argv[2]);
function factorial(number) {
  if (isNaN(number)) {
    return 1;
  }
  number = parseInt(number);
  if (number < 0) {
    return undefined;
  }
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(param));
