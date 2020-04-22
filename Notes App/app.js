const chalk = require('chalk');
// const validator = require('validator');
const getNotes = require('./notes.js');

const msg = getNotes();

const command = process.argv[2];

if (command === 'add') {

} else if (command === 'remove') {
    
}