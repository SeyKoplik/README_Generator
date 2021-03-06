// function to generate markdown for README_example.md file being created
function generateMarkdown(data) {
  return `# ${data.title} 

${data.badge}

## Description
${data.description}

## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License) 
  * [Contributing](#Contributing) 
  * [Test](#Test)
  * [Questions](#Questions)

## Installation
- ${data.installation}
- ${data.dependencies}

## Usage
${data.usage}

## License
This project is covered under this
${data.license} license. 

Click on the badge on top for more information about the license.

## Contributing
If you would like to contribute, please follow the process below:
${data.contribution}

## Tests
Please use this command to run tests:
- ${data.test}

## Questions
If you have any questions please feel free to reach me by email at the following email address: (${data.emailAddress}). Please check out the rest of my work on github @[${data.gitusername}]('http://github.com/${data.gitusername}) 

`;
}

module.exports = generateMarkdown;
