// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  ## Installation

  ## Usage

  ## License

  ## Contributing

  ## Tests

  ## Questions
  If you have any questions please feel free to reach my by email at the following email address: (${data.emailAddress}). Please check out the rest of my work on [${data.name}]('http://github.com/${data.name}) 
`;
}

module.exports = {
  generate: generateMarkdown
}
