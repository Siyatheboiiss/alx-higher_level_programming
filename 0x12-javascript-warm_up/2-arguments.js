#!/usr/bin/node
const argumentsArr = process.argv.slice(2);
if (argumentsArr.length === 0) {
  console.log('No argument');
} else if (argumentsArr.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
