// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    ISC: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
    GNULGPLv3: `[![License: AGPL v3] (https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`,
    Mozilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    Apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  };
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: `[MIT](https://choosealicense.com/licenses/mit/)`,
    ISC: `[ISC](https://choosealicense.com/licenses/isc/)`,
    GNULGPLv3: `[GNULGPLv3][ISC](https://choosealicense.com/licenses/isc/)`,
    MozillaPublicLicense: `[MozillaPublicLicense](https://choosealicense.com/licenses/mpl-2.0)`,
    ApacheLicense: `[ApacheLicense](https://choosealicense.com/licenses/apache-2.0)`,
  };
  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Licensed under the ${renderLicenseLink(license)} license`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

${renderLicenseBadge(answers.license)}

## Table of Content
- [Project Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Test)
- [License](#License)


## Description
${answers.description}

## Installation
${answers.Installation};

## Usage
${answers.usage};

## Contributing
${answers.contributing};

## Tests
${answers.tests}

## License
${renderLicenseSection(answers.license)}



## Questions

For any questions, please contact me at

Github URL: https://github.com/sabeen44

LinkedIn: https://www.linkedin.com/in/sabeen-chaudhry/ `;
}

module.exports = generateMarkdown;
