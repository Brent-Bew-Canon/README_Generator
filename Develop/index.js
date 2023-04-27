// Node packages needed: npm i inquirer@8.2.4


const generate = require("./utils/generateMarkdown")
const fs = require('fs');
const inquirer = require('inquirer');
const lic = require("./utils/licenses");


// Array of prompts for the readme generator 
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
        choices: lic.licenses,
        name: 'license'

    }
];

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const htmlContent = generate.generateMarkdown(response);
            writeToFile("README-Copy.md", htmlContent);
        });

    // Writes the README file
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) {
                console.error("There's been an error: " + err)
            }
        })
    }
}

// Function call to initialize app
init();
