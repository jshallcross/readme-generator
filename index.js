// Packages needed 
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

// Questions array
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?(Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the name of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter any installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please give an example of the usage of the project.'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please enter the path for your screenshot image.(Ex. "../images/screenshot.png")'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please explain any contribution guidelines.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter any testing instructions.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Git Hub username?(Required)',
        validate: githubName => {
            if (githubName) {
                return true;
            } else {
                console.log("Please enter your Git Hub username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like to use?',
        choices: ['MIT License', 'ISC License', 'Mozilla Public License 2.0']
    }

];

// Function to write the new read me file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./utils/new-readme.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'Readme done!'
            });
        });
        console.log("Your new ReadMe is complete!");
    });
}

// The initialize app function
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            return generateMarkdown(answers);
        }) .then (pageMd => {
            return writeFile(pageMd);
        })
}

// Function call to initialize app
init();
