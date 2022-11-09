// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, installation, usage, contributions, test }) =>
    // indenting was preventing headers from working
    `# ${title}

## Description
${description}
   
## Installation Instructions
${installation}
    
## Usage
${usage}
    
## Contributions 
${contributions}
    
## Test Instructions
${test}`

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter a description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions for your project',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please enter usage information about your project',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please enter any contribution guidelines for your project',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Please enter test intructions for your project',
            name: 'test',
        }
    ])
    .then((answers) => {
        const readMeMachine = generateReadMe(answers);
        console.log(answers);

        fs.writeFile('README.md', readMeMachine, (err) =>
            err ? console.log(err) : console.log("Saved!")
        )
    });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README