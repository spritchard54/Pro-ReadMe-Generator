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
    return `# ${data.title} \n## Description \n ${data.description} \n## Installation \n ${data.installation} \n## Usage \n ${data.usage} \n## Contributing \n ${data.contributing} \n## Test \n ${data.tests} \n## Questions \n - Github: https://github.com/${data.username} \n - Email: <${data.email}>`};


module.exports = generateMarkdown;
