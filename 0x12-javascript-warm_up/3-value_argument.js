#!/usr/bin/node
const argumentsArr = process.argv.slice(2);
if (argumentsArr[0] === undefined) {
  console.log('No argument');
} else {
  console.log(argumentsArr[0]);
}
