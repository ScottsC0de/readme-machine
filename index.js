// right click a file, press "Open In Integrated Terminal" to run node in VSCode

// license name array, to post license badge icon and license name into License section on ReadMe 
const licenseNames = [
    { name: 'Apache License 2.0', value: 'Apache_2.0-blue' },
    { name: 'GNU General Public License v3.0', value: 'GPLv3-blue' },
    { name: 'MIT License', value: 'MIT-yellow' },
    { name: 'BSD 2-Clause "Simplified" License', value: 'BSD_2--Clause-orange' },
    { name: 'BSD 3-Clause "New" or "Revised" License', value: 'BSD_3--Clause-blue' },
    { name: 'Boost Software License 1.0', value: 'Boost_1.0-lightblue' },
    { name: 'Creative Commons Zero v1.0 Universal', value: 'CC0_1.0-lightgrey' },
    { name: 'Eclipse Public License 2.0', value: 'EPL_1.0-red' },
    { name: 'GNU Affero General Public License v3.0', value: 'AGPL_v3-blue' },
    { name: 'GNU General Public License v2.0', value: 'GPL_v2-blue' },
    { name: 'GNU Lesser General Public License v3.0', value: 'LGPL_v3-blue' },
    { name: 'Mozilla Public License 2.0', value: 'MPL_2.0-brightgreen' },
    { name: 'The Unlicense', value: 'Unlicense-blue' }
];

// grab inquirer node package and grant access to filesystem
const inquirer = require('inquirer');
const fs = require('fs');

// function to post license name rather than license value
const getLicenseName = (licenseKey) => {
    const match = licenseNames.filter((licenseObject) => licenseObject.value === licenseKey)
    const { name } = match[0];
    return name;
}

// function for generating ReadMe file
const generateReadMe = ({ title, description, installation, usage, contributing, test, license, github, email }) =>
    // indentation was important here, was preventing h2s from working
    `# ${title}

![alt text](https://img.shields.io/badge/License-${license}.svg)

<img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" alt="github mascot with daft punk helmet on" width="200"/>

[//]: # (demonstrating some cool markdown syntax tricks. this is a markdown comment)

This ReadMe file was generated using:
- **Markdown**, a fun and easy-to-learn language that creates appealing ReadMe documents
- **node.js**, a way to run server-side JavaScript functions
> Who doesn't ~~like~~ _love_ a good ReadMe?&nbsp;

## 💡 Table of Contents

- [Description](#description-id)
- [Installation](#installation-id)
- [Usage](#usage-id)
- [License](#license-id)
- [Contributing](#contributing-id)
- [Tests](#tests-id)
- [Questions](#questions-id)

## <a id="description-id"></a>Description
${description}
   
## <a id="installation-id"></a>Installation
${installation}
    
## <a id="usage-id"></a>Usage
${usage}

## <a id="license-id"></a>License
This application is covered under **${getLicenseName(license)}**
    
## <a id="contributing-id"></a>Contributing
${contributing}
    
## <a id="tests-id"></a>Tests
${test}

## <a id="questions-id"></a>Questions
You can check out my repositories here on my GitHub account: 
<a href="https://github.com/${github}">${github}</a>\n
AND\n
You can send an email to **${email}** with any questions!`

// function to run inquirer node package on the CLI (type node index.js)
// notice there is nothing written before inquirer
inquirer
    // where the questions come from
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
            type: 'list',
            message: 'Please choose a license from the following:',
            choices: licenseNames,
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please enter any contribution guidelines for your project',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please enter test intructions for your project',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        }
    ])
    // generate the markdown file
    .then((answers) => {
        const readMeMachine = generateReadMe(answers);
        console.log(answers);

        // let the user know if it worked
        fs.writeFile('README.md', readMeMachine, (err) =>
            err ? console.log(err) : console.log("Success! Click on your new ReadMe file and Open Preview!")
        );
    });


