const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "gitusername",
    message: "Please enter your GitHub username: "
  },
  {
    type: "input",
    name: "emailAddress",
    message: "Please enter your email address: "
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a summary of the project:"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install this project?"
  },
  {
    type: "input",
    name: "usage",
    message: "What are examples of usage of this project?"
  },
  {
    type: "list",
    message: "What type of license do you require?",
    name: "license",
    choices: [
      "MIT",
      "Apache 2.0",
      "GPL 3.0",
      "BSD 3",
      "None"],
    default: "MIT"
  },
  {
    type: "list",
    message: "Please select the appropriate badge link for the license",
    name: "badge",
    choices: [
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      "None"],
    default: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  },
  {
    type: "input",
    name: "contribution",
    message: "Are there any contributors you would like to add? If any, please list them here."
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be ran to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be ran to do tests?",
    default: "npm test"
  },
];

// function to use inquirer
inquirer.prompt(questions)
  .then(function (answer) {
    // declare a variable to use function exported to apply to answers
    const markdown = generateMarkdown(answer);
    // use writeToFile function to create the readme_example file
    writeToFile("README_example.md", markdown);
  });


// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {

    if (err) {
      return console.log(err);
    }

    console.log("===================\n\n Congrats! You have successfully written a new README file for your project! \n\n===================");
  });
};


