const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs")


const managerQuestions = [
  {
    name: "managerName",
    type: "input",
    message: "What is the managers name?",
  },
  {
    name: "managerId",
    type: "input",
    message: "What is the managers id?",
  },
  {
    name: "managerEmail",
    type: "input",
    message: "What is the managers email?",
  },
  {
    name: "managerOfficeNumber",
    type: "input",
    message: "What is the managers office number?",
  },
];

const employees = [];

function askManager() {
  inquirer.prompt(managerQuestions).then((answers) => {
    // console.log(answers)
    createManager(answers);
  });
}

function createManager(data) {

    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber)

  employees.push(manager);
  askNextEmployee();
}

function askNextEmployee(engineer) {
  inquirer
    .prompt([
      {
        name: "employee",
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "Exit"],
      },
    ])
    .then((type) => {
      switch (type.employee) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          //Run function to render HTML
        writeFile()
          break;
      }
    });
}

function createEngineer() {
  const engineerQuestions = [
    {
      name: "engineerName",
      type: "input",
      message: "What is the engineers name?",
    },
    {
      name: "engineerId",
      type: "input",
      message: "What is the engineers id?",
    },
    {
      name: "engineerEmail",
      type: "input",
      message: "What is the engineers email?",
    },
    {
      name: "engineerGithub",
      type: "input",
      message: "What is the engineers Github?",
    },
  ];

  inquirer.prompt(engineerQuestions).then((data) => {
    const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)


    employees.push(engineer);
    askNextEmployee();
  });
}

function createIntern() {
  const internQuestions = [
    {
      name: "internName",
      type: "input",
      message: "What is the interns name?",
    },
    {
      name: "internId",
      type: "input",
      message: "What is the interns id?",
    },
    {
      name: "internEmail",
      type: "input",
      message: "What is the interns email?",
    },
    {
      name: "internSchool",
      type: "input",
      message: "What is the interns school?",
    },
  ];

  inquirer.prompt(internQuestions).then((data) => {
    const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)

    employees.push(intern);
    askNextEmployee();
  });
}

function createCard(employee) {
  let employeeType = employee.getRole();
  var extraProperty = employeeType === "Manager"
    ? `<li>officeNumber: ${employee.getOfficeNumber()}</li>`
    : employeeType === "Engineer"
    ? `<li>Github: ${employee.getGithub()}</li>`
    : `<li>School: ${employee.getSchool()}</li>`;
  return `
        <div>
            <h1>${employee.getName()}</h1>
            <h2>${employeeType}</h2>
            <ol> 
            <li>${employee.getId()}</li>
            <li>${employee.getEmail()}</li>
            ${extraProperty}
            </ol>
            
        </div>
        `;
}

function createHtml() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${employees.map(createCard)} 
    </body>
    </html>
    `;
}

function writeFile() {

    fs.writeFileSync("dist/index.html", createHtml());

}

function init() {
  askManager();
}
init();
