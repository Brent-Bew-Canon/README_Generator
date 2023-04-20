// Done: Include packages needed for this application
// npm i inquirer@8.2.4


const generate = require("./utils/generateMarkdown")
const fs = require('fs');
const inquirer = require('inquirer');

// Done Create an array of questions for user input

// Done: Find a way to use inquirer to give you a list of options to select a license from.
const questions = [
    {
        type: 'input',
        message: 'What is your github name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'How will you describe this application?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for this application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What usage information is needed for this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contributions guidelines for this application?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions for this application?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What type of license does this application have?',
        choices: generate.licenses,
        name: 'license'

    }
];

inquirer
    .prompt(questions)
    .then((response) => {
        const htmlContent = generate.generateMarkdown(response);
        writeToFile("README-Copy.md", htmlContent);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + ".md", data, err => {
        if (err) {
            console.error("There's been an error: " + err)
        }
    })
}


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
