// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions please feel free to reach my by email at the following email address: (${data.emailAddress}). Please check out the rest of my work on [${data.name}]('http://github.com/${data.name}) 
`;
}

module.exports = {
  generate: generateMarkdown
}
