const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants");

//empty array that the populate with the employee information
const finalTeam = []
let manager
let teamName

// prompt function that gathers information on whether the employee is an intern or and engineer

managerInfo()

function managerInfo() {
    inquirer.prompt ([
    {
        name: 'teamName',
        type: 'input',
        message: 'What is the name of your team?'
    },
    {
        name: 'managerName',
        type: 'input',
        message: 'What is your name?'
    },
    {
        name: 'managerEmail',
        type: 'input',
        message: 'What is your email address?'
    },
    {
        name: 'managerId',
        type: 'input',
        message: 'What is your manager ID?'
    },
    {
        name: 'officeNum',
        type: 'input',
        message: 'What is your office number?'
    }
    ])
    // .then that waits for the manager's response to store the manager's information in a new manager variable
    .then(managerResponse => {
        manager = new Manager(managerResponse.managerName, managerResponse.managerEmail, managerResponse.managerId, managerResponse.officeNum)
        teamName = managerResponse.teamName
        employeeInfo()
    })

}
// employee prompt that grabs the employee (intern or student's) information
function employeeInfo() {
    inquirer.prompt([
    {   
        name: 'empRole',
        type: 'checkbox',
        message: 'Are you an intern or engineer?',
        choices: ['engineer', 'intern'],
    },
    {
        name: 'empName',
        type: 'input',
        message: 'What is your name?'
    },
    {
        name: 'empId',
        type: 'input',
        message: 'What is your employee ID?'
    },
    {
        name: 'empEmail',
        type: 'input',
        message: 'What is your email address?'
    },
    {
        name: 'school',
        type: 'input',
        message: 'What school did you go to?',
        
    },
    {
        name: 'empGithub',
        type: 'input',
        message: 'What is your github link?',
        
    }
])
    .then(empResponse =>{
        if (empResponse.empRole === 'engineer') {
            const employee = new Engineer(empResponse.empName, empResponse.empId, empResponse.empEmail, empResponse.empGithub)
            finalTeam.push(employee)
        } else if (empResponse.empRole === 'intern') {
            finalTeam.push(new Intern(empResponse.empName, empResponse.empId, empResponse.empEmail, empResponse.school))
        }
        
        console.log(finalTeam)
        writeToHtml(finalTeam)
    
    })
   
}

function writeToHtml(finalTeam) {
    fs.writeFileSync(outputPath, render(finalTeam), function(err){
        if (err) {
            console.log(err)
        }else{
            console.log('Your team was written sucessfully!')
        }
    })
}



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
