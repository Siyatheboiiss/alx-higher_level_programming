#!/usr/bin/node
const fs = require('fs');

const [fileA, fileB, fileC] = process.argv.slice(2);

fs.readFile(fileA, 'utf8', (err, dataA) => {
  if (err) {
    return;
  }

  fs.readFile(fileB, 'utf8', (err, dataB) => {
    if (err) {
      return;
    }

    fs.writeFile(fileC, dataA + dataB, (err) => {
      if (err) {
        return;
      }
    });
  });
});
