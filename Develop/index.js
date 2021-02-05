// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
const questions = [
   /* {
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
        message: 'Lastly, please enter your email address.'
    }*/
    {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like to use?',
        choices: ['MIT', 'ISC', 'Mozilla']
    }

];





// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('readmetest.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'Readme done!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            return generateMarkdown(answers);
        }) .then (pageMd => {
            return writeFile(pageMd);
        })
}

// Function call to initialize app
init();
