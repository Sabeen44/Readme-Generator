// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Provide a description of your project:",
      name: "description",
    },

    {
      type: "input",
      message: "What is your Github username?",
      name: "username",
    },

    {
      type: "input",
      message:
        "Describe the steps required to install your project for the Installation section:",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions and examples of your project:",
      name: "usage",
    },
    {
      type: "input",
      message:
        "Provide any guidelines on how other developers can contribute to your project:",
      name: "contributing",
    },
    {
      type: "input",
      message:
        "Provide any tests written for your application and provide examples on how to run them:",
      name: "tests",
    },
    {
      type: "list",
      message: "Choose a license for your project:",
      choices: ["MIT", "ISC", "GNULGPLv3", "Mozilla", "Apache"],
      name: "license",
    },
  ])
  .then((answers) => {
    console.log(answers);
    writeToFile(`README.md`, answers);
  });

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Your README.md is ready");
    }
  });
  //}
}

// TODO: Create a function to initialize app
// function init() {
//  (answers) => {
//     console.log(answers);
//     return answers;
//   });
//   //.catch((error)=>{console.log(error);})
// }

// Function call to initialize app
//init();
