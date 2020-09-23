// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

![badge](https://img.shields.io/badge/license-${data.license}-informational)

## Description
${data.description}

## Table of Contents
*[Installation](#Installation)
*[Usage](#Usage)
*[License](#License) 
*[Contributing](#Contributing) 
*[Test](#Test)
*[Questions](#Questions)

## Installation
Please use this command to install:
* ${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribution}

## Tests
Please use this command to run tests:
* ${data.tests}

## Questions
If you have any questions please feel free to reach my by email at the following email address: (${data.emailAddress}). Please check out the rest of my work on [${data.name}]('http://github.com/${data.name}) 


`;
}

module.exports = {
  generate: generateMarkdown
}
