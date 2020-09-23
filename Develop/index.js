// var inquirer = require("inquirer");
// var fs = require('fs');

const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "Questions",
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
    message: "What is your project's description?"
    },
    {
    type: "input",
    name: "instruction",
    message: "Any installation instructions?"
    },
    {    
    type: "list",
    message: "What type of license do you require?",
    name: "contact",
    choices: [
      "MIT",
      "Apache 2.0",
      "GPL 3.0",
      "BSD 3",
      "None" ]
    },
    {
    type: "input",
    name: "usage",
    message: "Do you have any usage directions to add?"
    },
    {
    type: "input",
    name: "contribution",
    message: "Are there any contributions you would like to add?"
    },
    {
    type: "input",
    name: "test",
    message: "What kind of tests??"
    },
];

inquirer.prompt(questions);

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();


//===================//

// inquirer.prompt([

//   {
//     type: "checkbox",
//     message: "What languages do you know?",
//     name: "stack",
//     choices: [
//       "HTML", 
//       "CSS", 
//       "JavaScript", 
//       "MySQL"
//     ]
//   },
//   {
//     type: "list",
//     message: "What is your preferred method of communication?",
//     name: "contact",
//     choices: [
//       "email",
//       "phone",
//       "telekinesis"
//     ]
//   }
// ]).then(function(data) {

//   var filename = data.name.toLowerCase().split(' ').join('') + ".json";

//   fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

//     if (err) {
//       return console.log(err);
//     }

//     console.log("Success!");

//   });
// });