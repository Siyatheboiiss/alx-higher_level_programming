#!/usr/bin/node
const size = parseInt(process.argv[2]);

if (isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
  for (let rowIndex = 0; rowIndex < size; rowIndex++) {
    let rowString = '';
    for (let colIndex = 0; colIndex < size; colIndex++) {
      rowString += 'X';
    }
    console.log(rowString);
  }
}
