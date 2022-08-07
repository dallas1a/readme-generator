const generateMarkdown = data => {
    return `# ${data.title}
   
  
    ## Description 
    ${data.description}

    ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Screenshot](#screenshot)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
    ## Installation
    ${data.install}

    ## Usage
    ${data.usage}

    ## Screenshot
    ![Screenshot](${data.screenshot})

    ## License 
    This project is licensed under ${data.license}
    ![badge](https://img.shields.io/badge/license-${data.license}-important)

    ## Contributing 
    ${data.contributors}

    ## Tests
    ${data.test}

  

    ## Questions
    If you have any questions about this project, please contact me at my email: ${data.email}. You can see more of my project repositories at https://github.com/${data.github}.
  `;

}

module.exports = generateMarkdown;