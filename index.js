// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
// Ask the questions here
let responses = {
    title: "Steve",
}

console.log(generateMarkdown(responses));

generateMarkdown(responses);

}

// Function call to initialize app
init();
