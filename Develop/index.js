// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();




const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "Provide your Github username."
    },
    {
      type: "input",
      name: "email",
      message: "Provide your email."
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "Description",
      message: "Describe your project."
    },
    {
      type: "input",
      name: "installation",
      message: "Describe what command the user must run to install dependencies."
    },
    {
      type: "input",
      name: "tests",
      message: "Describe what command the user must run to run tests."
    },
    {
      type: "list",
      name: "license",
      message: "Choose the license you would like to use.",
      choices: ["MIT", "APACHE", "GPL"]
    },
    {
      type: "input",
      name: "contributing",
      message: "Describe how the user may contribute to this repo."
    },
    {
      type: "input",
      name: "usage",
      message: "Describe what the user needs to know about using the repo."
    }
  ]);
}

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">This is my project, ${answers.title}</h1>
    <p class="lead">${answers.description}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">Email: ${answers.email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

async function init() {
  console.log("hi")
  try {
    const answers = await promptUser();

    const html = generateHTML(answers);

    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to index.html");
  } catch(err) {
    console.log(err);
  }
}

init();