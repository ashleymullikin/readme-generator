// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        // Title needed to be input by user
        type: 'input',
        name: 'title',
        message: 'What is the title of this project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project! (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },

    // How to install
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide the installation information in order to continue!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How is this project used? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide infomation on how to use your project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'How should/can others contribute to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
        } else {
            console.log('You need to provide information on how others can contribute to this project!');
            return false;
        }
    }
    },

    {
        type: 'input',
        name: 'testing',
        message: 'How is this project tested? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how this project is tested!');
                return false;
            }
        }
    },
    // Github name
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log ('Please enter your Github username!');
                return false;
            }            
        }
    },
    // Email address
    {
        type: 'input',
        name:'email',
        message: 'Would you like to include your email? (Optional)',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Your information has be transferred to a README!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    .then(function (userInput) {
        console.log(UserInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app, all needed
init();
