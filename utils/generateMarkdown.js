// Creates the licence badge and link to the licence details
const renderLicenseBadge = (data) => {
  let licenseBadge = data.license;
  if (licenseBadge === "MIT License") {
    return ` 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`
} 
else if (licenseBadge === "ISC License") {
    return `

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
`
  } else if (licenseBadge === "Mozilla Public License 2.0") {
    return `

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
`
  } 
};


// Function to render the License section of the Read Me
function renderLicenseSection(data) {
    let licenseSection = data.license;
      return `
## License
--- 
${licenseSection}  

Copyright ${new Date().getFullYear()} ${data.github}

`
};



// Main function to create the Read Me layout
function generateMarkdown(data) {
  return `# ${data.projectName} 
  ${renderLicenseBadge(data)} 
  
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
* [License](#license)


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
If you have any questions contact me below.  

GitHub profile (https://github.com/${data.github})   

${data.email}



${renderLicenseSection(data)}

`;
}

module.exports = generateMarkdown;
