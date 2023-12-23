// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `https://opensource.org/license/mit/`;
  } else if (license == "APACHE_2.0") {
    return `https://www.apache.org/licenses/LICENSE-2.0`;
  } else if (license == "GPL_3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  } else if (license == "BSD_3") {
    return `https://opensource.org/license/bsd-3-clause/`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT") {
    return `The MIT License was first developed at the Massachusetts Institute of Technology (MIT) in the late 1980s. The exact origins MIT license are bit of mystery. Like the Apache 2.0, and BSD family of licenses the MIT License is a permissive software license that places few restrictions of reuse. Users of software using an MIT License are permitted to use, copy, modify, merge publish, distribute, sublicense and sell copies of the software. Some notable projects use the MIT License including Ruby on Rails, and the X Windows System.`;
  } else if (license == "APACHE_2.0") {
    return `The 2.0 version of the Apache License, approved by the ASF in 2004, helps us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development.
    All packages produced by the ASF are implicitly licensed under the Apache License, Version 2.0, unless otherwise explicitly stated.`;
  } else if (license == "GPL_3.0") {
    return `The GNU General Public License is a free, copyleft license for software and other kinds of works.
    The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too...`;
  } else if (license == "BSD_3") {
    return `BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software. This is in contrast to copyleft licenses, which have share-alike requirements. The original BSD license was used for its namesake, the Berkeley Software Distribution (BSD), a Unix-like operating system. The original version has since been revised, and its descendants are referred to as modified BSD licenses...`;
  };
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.title} ${renderLicenseBadge(data.license)}

![Readme.md Screenshot](./assets/images/${data.ssFileName})

## Table of Contents
[Description](#description)<br>
[Installation](#installation)<br>
[Usage](#usage)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[License Link](#license-link)<br>
[License Description](#license-description)<br>
[Questions](#questions)

## Description
${data.description}
    
## Installation
${data.installation}
    
## Usage 
${data.usage}
    
## Contributing 
${data.contributors}
    
## Tests
${data.tests}

## License Link
${renderLicenseLink(data.license)}

## License Description
${renderLicenseSection(data.license)}
    
## Questions
- Github: https://github.com/${data.username}
- Email: <${data.email}>`
};


module.exports = generateMarkdown;
