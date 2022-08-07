
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateReadme = require('./utils/generateMarkdown.js');


const questions = () => {
  return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project.",
        default: '',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter a project name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "repo",
        message: "Enter the name of your GitHub repository.",
        default: '',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter your GitHub repository name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project: ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false; 
            }
        }
    }, 
    
    {
        type: "input",
        name: "installation",
        message: "What are the steps required for installation.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter steps required to install your project!');
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a usage description!');
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "List any contributors, if any, with links to their GitHub profiles.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter any other contributors, write none if there were none');
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "How would a user test this application", 
        default: '',
    },
    {
        type: "list",
        message: "what license are you using? ",
        name: "license",
        choices: ["UCONN", "AAL", "ISC", "MIT", "NTP", "W3C", "UCONN"],
    },
    {
        type: "input",
        name: "screenshot",
        message: "please enter relative path for your screenshot image.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a relative path for your project screenshot!');
                return false; 
            }
        }
    },
   
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false; 
            }
        },
    },
]);
};



const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        
        if (err) {
            console.log(err);
            return;
         
        } else {
            console.log("Your professional README has been created!")
        }
    })
}; 


questions()

.then(answers => {
    return generateReadme(answers);
})

.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})