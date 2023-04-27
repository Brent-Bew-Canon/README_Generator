
const lic = require("./licenses")

// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  for (let i = 0; i < lic.licenses.length; i++) {
    if (license === lic.licenses[i].name) {
      return lic.licenses[i].badge
    }
  }
  return ""
}

// function to generate markdown for README
const generateMarkdown = function (data) {
  return `# ${data.title}

# Table of Contents

1. [Description](#description)
2. [License](#license)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Testing Instructions](#testing-instructions)
7. [Questions](#questions)

## Description
${data.description}

## License
Licensed under the ${data.license}    
          
${renderLicenseBadge(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
Contact me here with questions:     
${data.email}       
${data.username}

`;
}


module.exports = {
  generateMarkdown,
}
