const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(chalk.green.bold.inverse('Success!'));

console.log(msg)