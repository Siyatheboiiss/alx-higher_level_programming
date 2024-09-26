#!/usr/bin/node
const { args } = process.argv
const arguments = args.slice(2);
if(arguments.length === 0) {
    console.log('No argument');
} else {
    console.log('Argument found');
}; 
