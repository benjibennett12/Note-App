const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');

// const notesTaking = require('./notes.js')

// const msg = notesTaking();

// console.log(msg);

// console.log(validator.isURL('https://mead.io'))

// console.log(chalk.green('Success!'))

// console.log(chalk.blue.bold('I am your Father'));

// console.log(chalk.red('Error'));

// console.log(process.argv[2])

// const command = process.argv[2];

// if (command === 'add') {
//     console.log('Adding Note')
// } else if (command === 'remove') {
//     console.log('Removing note')
// }

//Customize yargs version
yargs.version('1.1.0');

//Creat add command



yargs
    .command({
        command: 'add',
        describe: 'Adding notes',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,  //This is set to false by default and setting it to true means it is required
                type: 'string', //This just make it require for the input in title is to be a string and not a boolean by default
            },
            body: {
                describe: 'Note Body',
                demandOption: true,
                type: 'string',
            },
        },
        handler: argv => {
            // console.log('Title:' + argv.title);
            // console.log('Body:' + argv.body)
            notes.addNote(argv.title, argv.body)
        },
    })
    .command({
        command: 'remove',
        describe: 'Removing notes',
        handler: argv => {
            console.log('Removing notes');
        }
    })
    .command({
        command: 'list',
        describe: 'Listing notes',
        handler: argv => {
            console.log('Listing notes')
        }
    })
    .command({
        command: 'read',
        describe: 'Reading notes',
        handler: argv => {
            console.log('Reading notes')
        }
    })
    .parse();




//add , remove , read, list

console.log(yargs.argv)

// console.log(process.argv)