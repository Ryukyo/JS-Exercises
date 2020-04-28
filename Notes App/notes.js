const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => "Your notes..."

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((notes) => notes.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green(`Added note with title ${title}`));
    } else {
        console.log(chalk.red(`Note with title ${title} is already in use`));
    }    
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((notes) => notes.title !== title);

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red(`There was no note with title ${title}`));
    } else {
        saveNotes(notesToKeep);
    console.log(chalk.green(`Removed note with title ${title}`));
    }
    
}

const saveNotes = (notesArr) => {
    const dataJSON = JSON.stringify(notesArr);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBufferString = fs.readFileSync('notes.json').toString();
        return JSON.parse(dataBufferString);
    } catch(err) {
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}