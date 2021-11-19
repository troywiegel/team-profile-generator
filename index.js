const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const generateHtml = require('./generateHtml')

// empty array to place employees into
const team = []

// function to prompt user for employee info
function getTeam() {
    // using inquirer to prompt user via the terminal
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employee name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the employee ID?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the employee email address?',
            name: 'email'
        },
        {
            type: 'list',
            message: 'What is the employee job role?',
            name: 'role',
            choices: [
                'manager',
                'engineer',
                'intern'
            ]
        },
        {
            type: 'input',
            message: 'What is the manager office number?',
            name: 'office',
            when: (answers) => answers.role === 'manager'
        },
        {
            type: 'input',
            message: 'What is the engineer github username?',
            name: 'github',
            when: (answers) => answers.role === 'engineer'
        },
        {
            type: 'input',
            message: 'What school is the intern from?',
            name: 'school',
            when: (answers) => answers.role === 'intern'
        },
    ])
        .then((answer) => {
            // employee switch to cyle through employee by role and create new class member accordingly
            let employee;

            switch (answer.role) {

                case 'manager':
                    employee = new Manager(answer.name, answer.id, answer.email, answer.role, answer.office)
                    team.push(employee)
                    addEmployee()
                    break;
                case 'engineer':
                    employee = new Engineer(answer.name, answer.id, answer.email, answer.role, answer.github)
                    team.push(employee)
                    addEmployee()
                    break;
                case 'intern':
                    employee = new Intern(answer.name, answer.id, answer.email, answer.role, answer.school)
                    team.push(employee)
                    addEmployee()
                    break;
            }
        })
}
// function to ask if more employees should be added or if html file should be generated
function addEmployee() {
    // using inquirer to prompt user via the terminal
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add another employee?',
                name: 'add',
                choices: [
                    'yes',
                    'no'
                ]
            }
        ])
        .then((answer) => {
            if (answer.add === 'yes') {
                getTeam()
            } else {
                generateHtml(team)
            }
        })
}
// calls getTeam() function to start the app
getTeam()