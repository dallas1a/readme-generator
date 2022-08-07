const generateMarkdown = data => {
    return `# ${data.title}
    ![license](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
    ## Description 
    ${data.description}

    ## Table of Contents
    * [Installation Instructions](#installation)
    * [Usage Information](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Testing](#test)
    * [Questions](#questions)
    
    ## Installation 
    ${data.install}

    ## Usage 
    ${data.usage}

    ## License 
    This project is licensed under ${data.license}

    ## Contributing 
    ${data.contributors}

    ## Tests
    ${data.test}

    ## Questions
    If you have any questions about this project, please contact me at my email: ${data.email}. You can see more of my project repositories at https://github.com/${data.github}.
  `;

}

module.exports = generateMarkdown;