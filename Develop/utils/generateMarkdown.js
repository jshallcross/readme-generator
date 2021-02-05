// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseBadge = data.license;
  if (licenseBadge === "MIT") {
    return ` 

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
`
  }  
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    let licenseSection = data.license;
    if (licenseSection === "MIT") {
      return `
## License  
Copyright ${new Date().getFullYear()} ${data.github}



`
    }  
};



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName} ${renderLicenseBadge(data)}



## Description
---
${data.description}
## Table of Contents
---
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Testing](#testing)
* [Questions](#questions)


## Installation
---
${data.install}
## Usage
---
${data.usage}
## Contributions
---
${data.contribution}
## Testing
---
${data.test}

## Questions
---
GitHub profile (https://github.com/${data.github})   

${data.email}



${renderLicenseSection(data)}



`;
}

module.exports = generateMarkdown;
