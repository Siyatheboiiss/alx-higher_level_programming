const argumentsArr = process.argv.slice(2);
const arg1 = argumentsArr[0] || 'undefined';
const arg2 = argumentsArr[1] || 'undefined';
console.log(`${arg1} is ${arg2}`);
