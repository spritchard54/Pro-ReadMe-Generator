// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// This is the original code
  function generateMarkdown(data) {
    return `# ${data.title} \n## Description \n ${data.description} \n## Installation \n ${data.installation} \n## Usage \n ${data.usage} \n## Contributing \n ${data.contributing} \n## Test \n ${data.tests} \n## Questions \n https://github.com/${data.username} \n Email: <a href="mailto:${data.email}">${data.email}</a>`};  

//The code below is an attempt at implicit returns and if it doesn't work revert back to above and try data.title, etc.
// function generateMarkdown(answers) {
//   return `# ${title} \n## ${description} \n## ${installation} \n## ${usage} \n## ${contributing} \n## ${tests}`};


module.exports = generateMarkdown;
