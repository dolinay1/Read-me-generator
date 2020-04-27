const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "Provide your Github username:"
    },
    {
      type: "input",
      name: "email",
      message: "Provide your email:"
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title? (Use hyphens to seperate each word.)"
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project:"
    },
    {
      type: "input",
      name: "installation",
      message: "Describe what command the user must run to install dependencies:"
    },
    {
      type: "input",
      name: "tests",
      message: "Describe what command the user must run to run tests:"
    },
    {
      type: "list",
      name: "license",
      message: "Choose the license you would like to use:",
      choices: ["MIT", "APACHE", "GPL"]
    },
    {
      type: "input",
      name: "contributing",
      message: "Describe how the user may contribute to this repo:"
    },
    {
      type: "input",
      name: "usage",
      message: "Describe what the user needs to know about using the repo:"
    },
    {
      type: "input",
      name: "picture",
      message: "Add your github profile picture by pasting the url here. (Check your github public profile for the url):"
    }
  ]);
}

async function init() {
  console.log("hi")
  try {
    const data = await promptUser();

    const markdown = generateMarkdown(data);

    await writeFileAsync("README.md", markdown);

    console.log("Successfully wrote Readme");
  } catch(err) {
    console.log(err);
  }
}

init();

function generateMarkdown(data) {
  return `

# Project Title
${data.title}



## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Tests](#tests)

* [License](#license)

* [Contributing](#contributing)

* [Usage](#usage information)

* [Contact](#contact)




# Description
${data.description}



# Installation
To install all dependencies run: ${data.installation}.



# Tests

To run tests for repository run: ${data.tests}.



# License
This repository uses a ${data.license} license.



# Contributing
${data.contributing}



# Usage
${data.usage}



# Contact
Questions about the repo or project? Contact at	https://github.com/${data.github} or directly by email at ${data.email}.

[![GitHub followers](https://img.shields.io/github/followers/${data.github}?style=social)](https://github.com/${data.github})

[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/${data.github}/${data.title})](https://github.com/${data.github}/${data.title}/commits/master)

![Profile_pic](${data.picture})

`;
}

module.exports = generateMarkdown;
