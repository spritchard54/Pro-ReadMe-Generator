const inquirer = require('inquirer');
const fs = require('fs');
const { error, clear } = require('console');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README.md file',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license from the options below.',
        choices: ['MIT', 'License Option 2', 'License option 3']
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
        message: 'Usage: provide some examples of how to use your application and include screen shots if available.',
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
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
]

// TODO: Create a function to initialize app

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markDownContent = generateMarkdown(answers);
            fs.writeFile('README.md', markDownContent, (err) =>
                err ? console.log(err) : console.log('The README.md file has been updated.')
            )
        });
}

// Function call to initialize app

init();
