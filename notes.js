const fs = require('fs');

const notesTaking = function () {
    return "Your notes...";
};

const addNote = function (title, body) {
    const notes = loadNotes(); //Load in the notes
    const duplicateNotes = notes.filter((notes) => {
        return notes.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({ //Change them 
            title: title,
            body: body
        })
        savedNotes(notes) //Save them

    } else {
        console.log('Note title taken')
    }


};

const savedNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('nots.json', dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    //  (function (note) {
    //     return note.title !== title //new array})


    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesToKeep) //new array to keep
    } else {
        console.log(chalk.red.inverse('No NOTE FOUND'))
    }
}
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })

}

const readNote = (title) => {

    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('NOTE NOT FOUND'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}



const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        console.log('Error loading notes:', e.message);
        return [];
    }
};


module.exports = {
    notesTaking: notesTaking,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}

//exporting a object woth both properties
// module.exports = notesTaking