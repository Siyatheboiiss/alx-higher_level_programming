#!/usr/bin/node
const argumentsArr = process.argv.slice(2);
if (argumentsArr.length === 0) {
  console.log('No argument');
} else {
  console.log('Argument found');
}
