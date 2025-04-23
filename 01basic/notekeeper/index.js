#!/usr/bin/env node
import inquirer from 'inquirer';
import { addNote, listNotes, deleteNote, searchNotes ,updateNote} from './notes.js';

// user prompt 
const userPrompt=[
    {
      type: 'list',
      name: 'action',
      message: 'Select an action:',
      choices: [
        'Add Note',
        'List Notes',
        'Delete Note',
        'Update Note',
        'Search Notes',
        'Exit'
      ]
    }
];

const main = async () => {
  while (true) {
    const { action } = await inquirer.prompt(userPrompt);
    
    if (action === 'Add Note') {
      await inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Enter note title:'
        },
        {
          type: 'input',
          name: 'body',
          message: 'Enter note body:'
        }
      ]).then(({ title, body }) => {
        // Add note to the list
        addNote(title, body)
      });
    }

    else if (action === 'List Notes') {
      listNotes();
    }

    else if (action === 'Delete Note') {
        await inquirer.prompt([
          {
            type: 'input',
            name: 'id',
            message: 'Enter ID of note to delete:'
          }
        ]).then(({ id }) => {
        // Delete note from the list    
        deleteNote(id);
        });
      }

      else if (action === 'Update Note') {
        await inquirer.prompt([
          {
            type: 'input',
            name: 'id',
            message: 'Enter ID of note to update:'
          },
          {
            type: 'input',
            name: 'newTitle',
            message: 'New title (leave blank to keep same):'
          },
          {
            type: 'input',
            name: 'newBody',
            message: 'New body (leave blank to keep same):'
          }
        ]).then(({ id, newTitle, newBody }) => {
        // Update note in the list 
        updateNote(id, newTitle || undefined, newBody || undefined);
        });
      }
      
      

    else if (action === 'Search Notes') {
      await inquirer.prompt([
        {
          type: 'input',
          name: 'query',
          message: 'Enter keyword to search:'
        }
      ]).then(({ query }) => {
        // Search notes in the list
        searchNotes(query);
      });
    }

    else if (action === 'Exit') {
      console.log('Goodbye!');
      break;
    }

    console.log('\n'); // Line break between actions
  }
};

main();
