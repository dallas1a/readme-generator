
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
        validate: githubInput => {
            if (githubInput) {
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
        validate: repoInput => {
            if (repoInput) {
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
        default: '',
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required for installation.",
        default: '',
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.", 
        default: '',
    },
    {
        type: "input",
        name: "contributing",
        message: "List any contributors, if any, with links to their GitHub profiles.",
        default: '',
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
        message: "please enter relative path for your screenshot image."
    },
   
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
        default: '',
    },
]);
};



const writeFile = data => {
    fs.writeFile('dist/README.md', data, err => {
        
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