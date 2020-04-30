const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
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

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bold.blue('*** Your notes ***'));

    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const requestedNote = notes.find((note) => note.title === title)

    if (requestedNote) {
        console.log(chalk.underline.yellow(requestedNote.title));
        console.log(requestedNote.body);
    } else {
        console.log(chalk.red.inverse('No note with this title was found'));
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
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}