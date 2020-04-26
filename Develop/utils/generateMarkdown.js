

// async function init() {
//   console.log("hi")
//   try {
//     const data = await promptUser();

//     const markdown = generateMarkdown(data);

//     await writeFileAsync("Readme.md", markdown);

//     console.log("Successfully wrote Readme");
//   } catch(err) {
//     console.log(err);
//   }
// }

// init();

// function generateMarkdown(data) {
//   return `

// # ${data.title}

// # ${data.description}

// # ${data.installation}

// # ${data.tests}

// # ${data.license}

// # ${data.contributing}

// # ${data.usage}

// # ${data.github}

// # ${data.email}

// `;
// }

module.exports = generateMarkdown;
