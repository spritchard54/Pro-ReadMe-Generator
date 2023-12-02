// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');
const generateMarkdown = require('./utils/generateMarkdown');



// fs.readFile('README.md', 'utf8', (error, data) => {
//     error ? console.error(error) : console.log(data)
// });



// TODO: Create an array of questions for user input 
//removed from line 18 "const questions =""
inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README.md file',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a desciption of your application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation: What are the steps required to install and run your app?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage: provide some examples of how to use your application and include screen show if available.',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Include any contributors to your application including tutorials with links.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include any tests that your an on your application, and explanations of how to run them.',
    }
])
.then((answers) => {
    const markDownContent = generateMarkdown(responses);
    fs.appendFile('README.md', markDownContent, (err) =>
    err ? console.log(err) : console.log('The README.md file has been updated.')
    )
});


// // TODO: Create a function to write README file
// function writeToFile(README, data) {

// }

// // TODO: Create a function to initialize app
// function init() {
//     // Ask the questions here
//     let responses = {
//         title: '',
//         description: '',
//         installation: '',
//         usage: '', 
//         contributing: '', 
//         tests: ''
//     }

//     console.log(generateMarkdown(responses));

//     generateMarkdown(responses);



// // Function call to initialize app
// init();
