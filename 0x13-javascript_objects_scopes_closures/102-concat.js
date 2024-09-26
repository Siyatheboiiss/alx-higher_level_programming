#!/usr/bin/node
const fs = require('fs');

const [fileA, fileB, fileC] = process.argv.slice(2);

fs.readFile(fileA, 'utf8', (err, dataA) => {
  if (err) {
    console.error(`Error reading ${fileA}: ${err.message}`);
    return;
  }

  fs.readFile(fileB, "utf8", (err, dataB) => {
    if (err) {
      console.error(`Error reading ${fileB}: ${err.message}`);
      return;
    }

    const content = dataA + dataB;

    fs.writeFile(fileC, content, (err) => {
      if (err) {
        console.error(`Error writing to ${fileC}: ${err.message}`);
        return;
      }

      console.log(`Contents of ${fileA} and ${fileB} concatenated to ${fileC}`);
    });
  });
});
