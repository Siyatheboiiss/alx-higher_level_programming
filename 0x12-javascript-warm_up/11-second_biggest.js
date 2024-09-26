#!/usr/bin/node
const listOfIntegers = process.argv.slice(2);
const sortAndReturnSecondBiggest = (arr) => {
  if (arr.length < 2) {
    return 0;
  }
  arr.sort((a, b) => b - a);
  return arr[1];
};

console.log(sortAndReturnSecondBiggest(listOfIntegers));
