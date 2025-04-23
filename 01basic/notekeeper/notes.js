import fs from 'fs';
import chalk from 'chalk';

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json', 'utf-8'));
  } catch {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
};

export const addNote = (title, body) => {
    const notes = loadNotes();
    if (notes.find(note => note.title === title)) {
      console.log(chalk.red('Note title already exists!'));
      return;
    }
    const newNote = {
      id: Date.now().toString(), // Unique ID
      title,
      body
    };
    notes.push(newNote);
    saveNotes(notes);
    console.log(chalk.green('Note added!'));
};
  
export const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note, i) => {
      console.log(`${i + 1}. ${chalk.blue(note.title)} - ${note.body} (ID: ${chalk.gray(note.id)})`);
    });
};
  
export const deleteNote = (id) => {
    const notes = loadNotes();
    const filtered = notes.filter(note => note.id !== id);
    if (notes.length === filtered.length) {
      console.log(chalk.red('No note found with that ID.'));
    } else {
      saveNotes(filtered);
      console.log(chalk.yellow('Note deleted successfully.'));
    }
};

export const updateNote = (id, newTitle, newBody) => {
    const notes = loadNotes();
    const noteIndex = notes.findIndex(note => note.id === id);
  
    if (noteIndex === -1) {
      console.log(chalk.red('No note found with that ID.'));
      return;
    }
  
    if (newTitle) notes[noteIndex].title = newTitle;
    if (newBody) notes[noteIndex].body = newBody;
  
    saveNotes(notes);
    console.log(chalk.green('Note updated successfully.'));
};
  
export const searchNotes = (query) => {
  const notes = loadNotes();
  const found = notes.filter(note =>note.title.includes(query) || note.body.includes(query));
  found.forEach(note => {
    console.log(chalk.magenta(note.title), "-", note.body);
  });
};
